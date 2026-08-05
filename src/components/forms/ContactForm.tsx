"use client"

import * as React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/Input"
import { Label } from "@/components/ui/Label"
import { Button } from "@/components/ui/Button"
import { siteConfig } from "@/config/site"

type FieldName = "name" | "brand" | "website" | "email" | "runningAds"

const REQUIRED: FieldName[] = ["name", "brand", "email"]

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    website: "",
    email: "",
    runningAds: "",
  })
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const validate = () => {
    const next: Partial<Record<FieldName, string>> = {}
    if (!formData.name.trim()) next.name = "Enter your name."
    if (!formData.brand.trim()) next.brand = "Enter your brand name."
    if (!formData.email.trim()) {
      next.email = "Enter your work email."
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      next.email = "Enter a valid email address."
    }
    return next
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const nextErrors = validate()
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      const firstInvalid = REQUIRED.find((field) => nextErrors[field])
      if (firstInvalid) document.getElementById(firstInvalid)?.focus()
      return
    }

    setIsSubmitting(true)
    
    const url = siteConfig.links.booking
    if (url.startsWith("/")) {
      router.push(url)
    } else {
      window.location.href = url
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
    if (errors[id as FieldName]) {
      setErrors((prev) => ({ ...prev, [id]: undefined }))
    }
  }

  const field = (
    name: FieldName,
    label: string,
    props: React.InputHTMLAttributes<HTMLInputElement> = {}
  ) => {
    const error = errors[name]
    const required = REQUIRED.includes(name)
    return (
      <div>
        <Label htmlFor={name}>
          {label}
          {required && (
            <span className="field-required" aria-hidden="true">
              {" *"}
            </span>
          )}
        </Label>
        <Input
          id={name}
          name={name}
          value={formData[name]}
          onChange={handleChange}
          required={required}
          aria-required={required || undefined}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${name}-error` : undefined}
          {...props}
        />
        {error && (
          <p className="field-error" id={`${name}-error`}>
            {error}
          </p>
        )}
      </div>
    )
  }

  return (
    <form
      className="flex max-w-lg flex-col gap-[var(--space-3)]"
      noValidate
      onSubmit={handleSubmit}
    >
      <p className="type-body text-[length:var(--type-ui)] mb-[var(--space-1)]">
        Share a few details so we can determine whether a conversation makes sense.
      </p>

      {field("name", "Name", { type: "text", autoComplete: "name" })}
      {field("brand", "Brand name", { type: "text", autoComplete: "organization" })}
      {field("website", "Website", { type: "url", autoComplete: "url", placeholder: "https://" })}
      {field("email", "Work email", { type: "email", autoComplete: "email" })}
      
      <div>
        <Label htmlFor="runningAds">Are you currently running Meta ads?</Label>
        <div className="relative mt-2">
          <select
            id="runningAds"
            name="runningAds"
            value={formData.runningAds}
            onChange={handleChange}
            className="w-full appearance-none rounded-[var(--radius-control)] border border-[var(--border)] bg-[var(--surface)] px-[var(--space-3)] py-3 text-[length:var(--type-body)] transition-colors focus:border-[var(--ink)] focus:outline-none focus:ring-1 focus:ring-[var(--ink)]"
          >
            <option value="" disabled>Select an option...</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[var(--muted)]">
            <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="pt-[var(--space-2)]">
        <Button
          type="submit"
          variant="outline"
          disabled={isSubmitting}
          className="self-start disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isSubmitting ? "Routing..." : "Request a 20-minute fit call"}
        </Button>
      </div>
    </form>
  )
}
