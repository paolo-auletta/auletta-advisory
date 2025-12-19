"use client"

import { Suspense, useEffect, useState } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const services = [
  { id: "advisory", label: "Advisory" },
  { id: "investing", label: "Investing" },
  { id: "ai-solutions", label: "AI Solutions" },
] as const

const formSchema = z.object({
  services: z.array(z.string()).min(1, "Please select at least one service"),
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  company: z.string().optional(),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  message: z.string().min(10, "Please provide more details"),
})

type FormValues = z.infer<typeof formSchema>

export default function ContactPage() {
  return (
    <Suspense>
      <ContactPageContent />
    </Suspense>
  )
}

function ContactPageContent() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const searchParams = useSearchParams()

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      services: [],
      firstName: "",
      lastName: "",
      company: "",
      email: "",
      phone: "",
      message: "",
    },
  })

  useEffect(() => {
    const service = searchParams.get("service")
    if (!service) return

    const isValidService = services.some((s) => s.id === service)
    if (!isValidService) return

    form.setValue("services", [service], { shouldValidate: true })
  }, [form, searchParams])

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log(data)
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <main className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 rounded-full bg-foreground flex items-center justify-center mx-auto mb-6">
            <Check className="h-8 w-8 text-background" />
          </div>
          <h1 className="text-3xl md:text-4xl font-medium text-foreground mb-4">
            Thank you!
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            We&apos;ve received your message and will be in touch soon.
          </p>
          <Button
            asChild
            size="lg"
            className="group h-12 px-6 text-base font-medium rounded-none bg-foreground text-background hover:bg-foreground/90 transition-all"
          >
            <Link href="/">
              Back to Home
            </Link>
          </Button>
        </div>
      </main>
    )
  }

  const selectedServices = form.watch("services")

  return (
    <main className="min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-24 md:py-32">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
              {/* Left Column */}
              <div className="flex flex-col justify-between">
                <div>
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-foreground leading-[1.1] mb-6">
                    Let&apos;s see how
                    <br />
                    we <span className="text-muted-foreground">can help</span>
                  </h1>
                </div>

                <div className="mt-auto pt-16 lg:pt-0 space-y-8 hidden md:block">
                  {/* Contact Info */}
                  <div className="flex flex-col gap-6">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
                        Email
                      </p>
                      <a 
                        href="mailto:info@aulettaadvisory.com" 
                        className="text-foreground hover:text-muted-foreground transition-colors"
                      >
                        info@aulettaadvisory.com
                      </a>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
                        Locations
                      </p>
                      <p className="text-foreground">Rome, Italy / Milan, Italy</p>
                    </div>
                  </div>

                  {/* Social & Back */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <Link 
                      href="/" 
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                      </svg>
                      Back to Home
                    </Link>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                    >
                      LinkedIn
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="lg:border-l lg:border-border lg:pl-16 space-y-8">
                {/* Service Selection */}
                <p className="text-sm font-medium text-muted-foreground tracking-wider mb-4">
                  What are you interested in?
                </p>
                <div className="flex w-full justify-space-between gap-4">
                  {services.map((service) => {
                    const isChecked = selectedServices?.includes(service.id)
                    return (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => {
                          const current = form.getValues("services")
                          if (isChecked) {
                            form.setValue("services", current.filter((v) => v !== service.id))
                          } else {
                            form.setValue("services", [...current, service.id])
                          }
                        }}
                        className={`px-4 py-2 text-sm font-medium border transition-all w-full ${
                          isChecked
                            ? "bg-foreground text-background border-foreground"
                            : "bg-transparent text-foreground border-border hover:border-foreground/50"
                        }`}
                      >
                        {service.label}
                      </button>
                    )
                  })}
                </div>
                {/* Name Fields */}
                <div>
                  <FormLabel className="text-sm text-muted-foreground block">Name</FormLabel>
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="First Name"
                              className="h-11 bg-transparent border-0 border-b border-border rounded-none px-0 focus:border-foreground focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-muted-foreground/60"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="Last name"
                              className="h-11 bg-transparent border-0 border-b border-border rounded-none px-0 focus:border-foreground focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-muted-foreground/60"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Company */}
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm text-muted-foreground">Company</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Your company"
                          className="h-11 bg-transparent border-0 border-b border-border rounded-none px-0 focus:border-foreground focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-muted-foreground/60"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Email */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm text-muted-foreground">Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Your email"
                          className="h-11 bg-transparent border-0 border-b border-border rounded-none px-0 focus:border-foreground focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-muted-foreground/60"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Message */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm text-muted-foreground">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Message"
                          className="min-h-[120px] bg-transparent border-0 border-b border-border rounded-none px-0 focus:border-foreground focus-visible:ring-0 focus-visible:ring-offset-0 resize-none placeholder:text-muted-foreground/60"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Submit Button */}
                <div className="pt-6">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 text-base font-medium rounded-none bg-foreground text-background hover:bg-foreground/90 transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Submit"}
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </main>
  )
}
