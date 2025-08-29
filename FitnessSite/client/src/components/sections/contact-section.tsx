import { useState } from "react";
import { motion } from "framer-motion";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSubmissionSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Send, MessageCircle } from "lucide-react";
import { FaInstagram, FaYoutube, FaWhatsapp, FaLinkedin } from "react-icons/fa";

type ContactFormData = {
  name: string;
  email: string;
  phone?: string;
  objective: "weight-loss" | "muscle-gain" | "general-fitness" | "competition";
  message: string;
};

export default function ContactSection() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      objective: undefined,
      message: ""
    }
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "¡Mensaje enviado!",
        description: data.message,
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/contact"] });
    },
    onError: (error: any) => {
      toast({
        title: "Error al enviar",
        description: error.message || "Por favor, inténtalo de nuevo.",
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  const socialLinks = [
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "https://instagram.com/pablo_sanro",
      className: "bg-gradient-to-r from-purple-500 to-pink-500",
      testId: "link-instagram"
    },
    {
      name: "YouTube", 
      icon: FaYoutube,
      url: "https://youtube.com/@pablo_sanro",
      className: "bg-red-600",
      testId: "link-youtube"
    },
    {
      name: "WhatsApp",
      icon: FaWhatsapp, 
      url: "https://wa.me/1234567890",
      className: "bg-green-500",
      testId: "link-whatsapp"
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "https://linkedin.com/in/pablo-sanro", 
      className: "bg-blue-600",
      testId: "link-linkedin"
    }
  ];

  return (
    <section id="contacto" className="py-20 bg-background dark:bg-background" data-testid="section-contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6" data-testid="contact-title">
            ¿Listo para empezar?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="contact-description">
            Contacta conmigo y comencemos tu transformación hoy mismo
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-card dark:bg-card rounded-2xl p-8 shadow-lg border border-border"
            data-testid="contact-form-container"
          >
            <h3 className="text-2xl font-bold text-card-foreground mb-6" data-testid="contact-form-title">
              Escríbeme
            </h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="form-contact">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel data-testid="label-name">Nombre completo</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Tu nombre completo"
                          {...field}
                          data-testid="input-name"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel data-testid="label-email">Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="tu@email.com"
                          {...field}
                          data-testid="input-email"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel data-testid="label-phone">Teléfono</FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder="+34 123 456 789"
                          {...field}
                          data-testid="input-phone"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="objective"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel data-testid="label-objective">Objetivo principal</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger data-testid="select-objective">
                            <SelectValue placeholder="Selecciona tu objetivo" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="weight-loss" data-testid="option-weight-loss">Perder peso</SelectItem>
                          <SelectItem value="muscle-gain" data-testid="option-muscle-gain">Ganar músculo</SelectItem>
                          <SelectItem value="general-fitness" data-testid="option-general-fitness">Fitness general</SelectItem>
                          <SelectItem value="competition" data-testid="option-competition">Competición</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel data-testid="label-message">Mensaje</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Cuéntame más sobre tu situación actual y objetivos..."
                          rows={4}
                          className="resize-none"
                          {...field}
                          data-testid="textarea-message"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                  disabled={contactMutation.isPending}
                  data-testid="button-submit-contact"
                >
                  {contactMutation.isPending ? (
                    "Enviando..."
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Enviar Mensaje
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
            data-testid="contact-info"
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6" data-testid="connect-title">
                Conecta conmigo
              </h3>
              <p className="text-lg text-muted-foreground mb-8" data-testid="connect-description">
                Sígueme en mis redes sociales para contenido diario, tips fitness y motivación constante.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center ${social.className} text-white p-4 rounded-xl hover:shadow-lg transition-all transform hover:scale-105`}
                    data-testid={social.testId}
                  >
                    <IconComponent className="text-2xl mr-3" />
                    <span className="font-semibold">{social.name}</span>
                  </a>
                );
              })}
            </div>

            <div className="bg-muted dark:bg-muted rounded-2xl p-6" data-testid="whatsapp-cta">
              <h4 className="font-semibold text-foreground mb-4" data-testid="urgent-title">
                ¿Tienes prisa?
              </h4>
              <p className="text-muted-foreground mb-4" data-testid="urgent-description">
                Para consultas urgentes o asesoramiento inmediato, escríbeme directamente por WhatsApp.
              </p>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
                data-testid="button-whatsapp-urgent"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Contactar por WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
