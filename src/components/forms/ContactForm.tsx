"use client"

import * as React from "react"
import { useState } from "react"
import { Input } from "@/components/ui/Input"
import { Label } from "@/components/ui/Label"
import { Textarea } from "@/components/ui/Textarea"
import { Button } from "@/components/ui/Button"

type FieldName = "name" | "brand" | "website" | "email" | "runningAds" | "jammingCreative"

const REQUIRED: FieldName[] = ["name", "brand", "email"]

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    website: "",
    email: "",
    runningAds: "",
    jammingCreative: "",
  })
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

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
    
    // Simulate swift form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 600)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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

  if (isSubmitted) {
    return (
      <div className="rounded-[var(--radius-media)] border border-[var(--dark-line)] bg-white/5 p-[var(--space-5)] text-left shadow-xl backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--dark-accent)]/20 text-[var(--dark-accent)]">
            <svg className="h-5 w-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className="font-sans text-lg font-bold tracking-tight text-[var(--dark-ink)]">
            Request Received
          </span>
        </div>
        <p className="type-body mt-4 text-[var(--dark-ink)] font-medium leading-relaxed">
          A reply with two time slots arrives within one business day.
        </p>
      </div>
    )
  }

  return (
    <form
      className="flex max-w-lg flex-col gap-[var(--space-4)]"
      noValidate
      onSubmit={handleSubmit}
    >
      {field("name", "Name", { type: "text", autoComplete: "name" })}
      {field("brand", "Brand", { type: "text", autoComplete: "organization" })}
      {field("website", "Website", { type: "url", autoComplete: "url", placeholder: "https://" })}
      {field("email", "Work email", { type: "email", autoComplete: "email" })}
      
      {/* Running Meta ads? — Custom UI/UX Segmented Pills */}
      <div>
        <Label htmlFor="runningAds">Running Meta ads?</Label>
        <div className="mt-2 flex gap-3" role="radiogroup" aria-label="Running Meta ads?">
          {["Yes", "No"].map((option) => {
            const isSelected = formData.runningAds === option
            return (
              <button
                key={option}
                type="button"
                role="radio"
                aria-checked={isSelected}
                onClick={() => {
                  setFormData((prev) => ({ ...prev, runningAds: option }))
                  if (errors.runningAds) {
                    setErrors((prev) => ({ ...prev, runningAds: undefined }))
                  }
                }}
                className={`flex-1 min-h-[44px] rounded-[var(--radius-control)] border px-4 py-2.5 text-[length:var(--type-ui)] font-semibold transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-text)] ${
                  isSelected
                    ? "border-[var(--dark-accent)] bg-[var(--dark-accent)] text-[#0a0a0a] shadow-md"
                    : "border-[var(--dark-border-strong)] bg-white/5 text-[var(--dark-ink)] hover:border-[var(--dark-ink)]"
                }`}
              >
                {option}
              </button>
            )
          })}
        </div>
        {errors.runningAds && (
          <p className="field-error" id="runningAds-error">
            {errors.runningAds}
          </p>
        )}
      </div>

      {/* Creative Pain Point Open Question */}
      <div>
        <Label htmlFor="jammingCreative">
          What’s jamming your creative right now?
        </Label>
        <Textarea
          id="jammingCreative"
          name="jammingCreative"
          rows={3}
          placeholder="e.g. Hooks wearing out quickly, takes 3 weeks to film new footage..."
          value={formData.jammingCreative}
          onChange={handleChange}
        />
      </div>

      <div className="pt-[var(--space-2)]">
        <Button
          type="submit"
          variant="primary"
          disabled={isSubmitting}
          className="w-full justify-center disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
        >
          {isSubmitting ? "Sending..." : "Book the call"}
        </Button>
      </div>
    </form>
  )
}

