"use client";

import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Scale,
  Users,
  FileText,
  Megaphone,
  AlertTriangle,
  Image,
  DollarSign,
  BadgeCheck,
} from "lucide-react";
import { useState } from "react";

export default function TermsOfService() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const tableOfContents = [
    { id: "acceptance", title: "Acceptance of Terms", icon: Scale },
    { id: "eligibility", title: "User Eligibility", icon: Users },
    { id: "account", title: "Account Responsibilities", icon: BadgeCheck },
    { id: "content", title: "User Content", icon: Image },
    { id: "conduct", title: "Community Guidelines", icon: FileText },
    { id: "casting", title: "Casting Opportunities", icon: Megaphone },
    { id: "payments", title: "Payments and Fees", icon: DollarSign },
    { id: "liability", title: "Limitations of Liability", icon: AlertTriangle },
  ];

  const toggleSection = (id: string) => {
    if (expandedSection === id) {
      setExpandedSection(null);
    } else {
      setExpandedSection(id);
    }
  };

  return (
    <main className="flex min-h-screen flex-col bg-background">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <Link href="/">
              <Button variant="ghost" className="mb-6 group">
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Terms of Service
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Guidelines and rules for using the CastIn platform
            </p>
            <div className="flex justify-center">
              <p className="text-sm text-muted-foreground">
                Last updated:{" "}
                {new Date().toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-[300px_1fr] gap-10 max-w-6xl mx-auto">
            {/* Sidebar / Table of Contents */}
            <motion.aside
              variants={container}
              initial="hidden"
              animate="show"
              className="md:sticky md:top-20 h-fit rounded-xl border bg-card p-6 shadow-sm"
            >
              <h3 className="font-semibold mb-4">On this page</h3>
              <nav className="space-y-2">
                {tableOfContents.map((item) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.id}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        show: { opacity: 1, y: 0 },
                      }}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <a
                        href={`#${item.id}`}
                        className="flex items-center py-1 text-sm text-muted-foreground hover:text-primary"
                      >
                        <Icon className="h-4 w-4 mr-2" />
                        {item.title}
                      </a>
                    </motion.div>
                  );
                })}
              </nav>
              <div className="mt-10 pt-6 border-t">
                <div className="bg-primary/10 rounded-lg p-4">
                  <h4 className="font-medium text-sm mb-2">Have Questions?</h4>
                  <p className="text-xs text-muted-foreground mb-2">
                    If you need clarification on our terms, contact us:
                  </p>
                  <a
                    href="mailto:contact@cast-in.app"
                    className="text-xs text-primary hover:underline block"
                  >
                    contact@cast-in.app
                  </a>
                </div>
              </div>
            </motion.aside>

            {/* Content */}
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="space-y-12"
            >
              {/* Introduction */}
              <motion.div
                variants={item}
                className="prose dark:prose-invert text-muted-foreground max-w-none mb-8"
              >
                <p>
                  Welcome to CastIn. These Terms of Service govern your use of
                  the CastIn platform, including our website, mobile
                  application, and all related services (collectively, the
                  "Service"). By accessing or using CastIn, you agree to be
                  bound by these Terms. If you disagree with any part of these
                  terms, you may not access the Service.
                </p>
              </motion.div>

              {/* Acceptance of Terms */}
              <motion.div
                variants={item}
                id="acceptance"
                className="scroll-mt-20"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary">
                    <Scale className="h-4 w-4 mr-2" />
                    <span className="text-sm font-medium">
                      Acceptance of Terms
                    </span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleSection("acceptance")}
                    className="h-8 w-8 p-0"
                  >
                    {expandedSection === "acceptance" ? "−" : "+"}
                  </Button>
                </div>
                <h2 className="text-2xl font-bold mb-4">Acceptance of Terms</h2>
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    expandedSection === "acceptance"
                      ? "max-h-[2000px]"
                      : "max-h-32"
                  }`}
                >
                  <div className="prose dark:prose-invert text-muted-foreground">
                    <p className="mb-4">
                      By creating a CastIn account or by using any part of the
                      Service, you agree to be bound by these Terms, which form
                      a legal agreement between you and CastIn. If you are using
                      the Service on behalf of an organization (such as a
                      casting agency), you represent and warrant that you have
                      the authority to bind that organization to these Terms.
                    </p>
                    <p className="mb-4">
                      We may modify these Terms at any time. When we do, we will
                      provide notice to you by publishing the most current
                      version and revising the date at the top of this page. If
                      we make any material change to these Terms, we will
                      provide additional notice to you, such as by sending you
                      an email or displaying a prominent notice when you next
                      use the Service. By continuing to use the Service after
                      any changes come into effect, you agree to the revised
                      Terms.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* User Eligibility */}
              <motion.div
                variants={item}
                id="eligibility"
                className="scroll-mt-20"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary">
                    <Users className="h-4 w-4 mr-2" />
                    <span className="text-sm font-medium">
                      User Eligibility
                    </span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleSection("eligibility")}
                    className="h-8 w-8 p-0"
                  >
                    {expandedSection === "eligibility" ? "−" : "+"}
                  </Button>
                </div>
                <h2 className="text-2xl font-bold mb-4">User Eligibility</h2>
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    expandedSection === "eligibility"
                      ? "max-h-[2000px]"
                      : "max-h-32"
                  }`}
                >
                  <div className="prose dark:prose-invert text-muted-foreground">
                    <p className="mb-4">
                      You must be at least 16 years old to use the Service. If
                      you are under 18, you must have the permission and
                      supervision of a parent or guardian, who agrees to be
                      bound by these Terms on your behalf. Certain features or
                      areas of the Service may have additional age restrictions,
                      which will be noted where applicable.
                    </p>
                    <div className="bg-muted/40 p-4 rounded-lg mb-4">
                      <h3 className="text-lg font-medium text-foreground mb-2">
                        For Professional Users
                      </h3>
                      <p>
                        If you are registering as a casting director, agent, or
                        other industry professional, you represent and warrant
                        that you are a legitimate industry professional with the
                        appropriate credentials and experience. CastIn reserves
                        the right to verify professional credentials and deny or
                        revoke access to users who misrepresent their
                        professional status.
                      </p>
                    </div>
                    <div className="bg-muted/40 p-4 rounded-lg">
                      <h3 className="text-lg font-medium text-foreground mb-2">
                        For Models and Talent
                      </h3>
                      <p>
                        If you are registering as a model or talent, you must
                        comply with all applicable laws regarding the content
                        you post, including age-appropriate content. Models
                        under 18 must have explicit parental consent and
                        parental management of their accounts.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Account Responsibilities */}
              <motion.div variants={item} id="account" className="scroll-mt-20">
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary">
                    <BadgeCheck className="h-4 w-4 mr-2" />
                    <span className="text-sm font-medium">
                      Account Responsibilities
                    </span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleSection("account")}
                    className="h-8 w-8 p-0"
                  >
                    {expandedSection === "account" ? "−" : "+"}
                  </Button>
                </div>
                <h2 className="text-2xl font-bold mb-4">
                  Account Responsibilities
                </h2>
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    expandedSection === "account"
                      ? "max-h-[2000px]"
                      : "max-h-32"
                  }`}
                >
                  <div className="prose dark:prose-invert text-muted-foreground">
                    <p className="mb-4">
                      You are responsible for maintaining the security of your
                      account and password. CastIn cannot and will not be liable
                      for any loss or damage resulting from your failure to
                      comply with this security obligation.
                    </p>
                    <div className="space-y-4 mb-4">
                      <div className="flex items-start">
                        <div className="mr-3 mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <span className="text-primary font-medium">1</span>
                        </div>
                        <div>
                          <h4 className="text-foreground font-medium">
                            Account Information
                          </h4>
                          <p className="text-sm">
                            You must provide accurate, current, and complete
                            information when creating your account and keep this
                            information updated. Misrepresentation of identity
                            or professional status may result in account
                            termination.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="mr-3 mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <span className="text-primary font-medium">2</span>
                        </div>
                        <div>
                          <h4 className="text-foreground font-medium">
                            One Account Per Person
                          </h4>
                          <p className="text-sm">
                            You may not create multiple accounts or transfer
                            your account to someone else. Each user must
                            maintain only one active account.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="mr-3 mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <span className="text-primary font-medium">3</span>
                        </div>
                        <div>
                          <h4 className="text-foreground font-medium">
                            Account Verification
                          </h4>
                          <p className="text-sm">
                            CastIn may implement verification procedures to
                            confirm the identity and professional status of
                            users. You agree to cooperate with these procedures,
                            which may include providing official identification
                            or professional references.
                          </p>
                        </div>
                      </div>
                    </div>
                    <p>
                      Your account may be terminated if CastIn has reasonable
                      grounds to suspect that the information you provide is
                      false, misleading, or inaccurate, or if you have violated
                      these Terms.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* User Content */}
              <motion.div variants={item} id="content" className="scroll-mt-20">
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary">
                    <Image className="h-4 w-4 mr-2" />
                    <span className="text-sm font-medium">User Content</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleSection("content")}
                    className="h-8 w-8 p-0"
                  >
                    {expandedSection === "content" ? "−" : "+"}
                  </Button>
                </div>
                <h2 className="text-2xl font-bold mb-4">User Content</h2>
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    expandedSection === "content"
                      ? "max-h-[2000px]"
                      : "max-h-32"
                  }`}
                >
                  <div className="prose dark:prose-invert text-muted-foreground">
                    <p className="mb-4">
                      CastIn allows you to post, upload, publish, submit, or
                      transmit content, including photos, videos, profiles, and
                      messages (collectively, "User Content"). By providing User
                      Content to the Service, you grant us a worldwide,
                      non-exclusive, transferable, royalty-free license to use,
                      copy, modify, create derivative works based on,
                      distribute, publicly display, and publicly perform your
                      User Content in connection with operating and providing
                      the Service.
                    </p>
                    <div className="bg-card border rounded-xl p-5 mb-4">
                      <h3 className="text-lg font-medium text-foreground mb-3">
                        Portfolio Content Guidelines
                      </h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="mr-2 text-primary">•</span>
                          All portfolio images and videos must be of
                          professional quality and appropriate for a
                          professional networking platform
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-primary">•</span>
                          Content must be your own or you must have explicit
                          permission to use it in your portfolio
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-primary">•</span>
                          Content featuring other people must have those
                          individuals' consent for you to display it
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-primary">•</span>
                          No explicit or inappropriate content that would be
                          considered unprofessional
                        </li>
                      </ul>
                    </div>
                    <p>
                      You represent and warrant that: (i) you own the User
                      Content or have the right to use it and grant us the
                      rights and license as provided in these Terms, and (ii)
                      the posting of your User Content does not violate the
                      privacy rights, publicity rights, copyrights, contract
                      rights, or any other rights of any person.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Community Guidelines */}
              <motion.div variants={item} id="conduct" className="scroll-mt-20">
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary">
                    <FileText className="h-4 w-4 mr-2" />
                    <span className="text-sm font-medium">
                      Community Guidelines
                    </span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleSection("conduct")}
                    className="h-8 w-8 p-0"
                  >
                    {expandedSection === "conduct" ? "−" : "+"}
                  </Button>
                </div>
                <h2 className="text-2xl font-bold mb-4">
                  Community Guidelines
                </h2>
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    expandedSection === "conduct"
                      ? "max-h-[2000px]"
                      : "max-h-32"
                  }`}
                >
                  <div className="prose dark:prose-invert text-muted-foreground">
                    <p className="mb-4">
                      CastIn is committed to providing a professional,
                      respectful, and safe environment for all users. You agree
                      not to use the Service in any way that:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="bg-red-500/10 rounded-lg p-4">
                        <h4 className="text-red-600 dark:text-red-400 font-medium mb-2">
                          Prohibited Conduct
                        </h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start">
                            <span className="mr-2 text-red-500">✕</span>
                            Harassment, intimidation, or discrimination
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2 text-red-500">✕</span>
                            Solicitation of inappropriate or non-professional
                            services
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2 text-red-500">✕</span>
                            Creating fake casting messages or misrepresenting
                            opportunities
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2 text-red-500">✕</span>
                            Posting explicit, violent, or offensive content
                          </li>
                        </ul>
                      </div>
                      <div className="bg-green-500/10 rounded-lg p-4">
                        <h4 className="text-green-600 dark:text-green-400 font-medium mb-2">
                          Expected Conduct
                        </h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start">
                            <span className="mr-2 text-green-500">✓</span>
                            Professional and respectful communication
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2 text-green-500">✓</span>
                            Accurate representation of yourself and
                            opportunities
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2 text-green-500">✓</span>
                            Respect for others' privacy and intellectual
                            property
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2 text-green-500">✓</span>
                            Reporting any suspicious or inappropriate behavior
                          </li>
                        </ul>
                      </div>
                    </div>
                    <p>
                      CastIn reserves the right to remove content and suspend or
                      terminate accounts that violate these community
                      guidelines, at our sole discretion and without prior
                      notice.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Casting Opportunities */}
              <motion.div variants={item} id="casting" className="scroll-mt-20">
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary">
                    <Megaphone className="h-4 w-4 mr-2" />
                    <span className="text-sm font-medium">
                      Casting Opportunities
                    </span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleSection("casting")}
                    className="h-8 w-8 p-0"
                  >
                    {expandedSection === "casting" ? "−" : "+"}
                  </Button>
                </div>
                <h2 className="text-2xl font-bold mb-4">
                  Casting Opportunities
                </h2>
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    expandedSection === "casting"
                      ? "max-h-[2000px]"
                      : "max-h-32"
                  }`}
                >
                  <div className="prose dark:prose-invert text-muted-foreground">
                    <p className="mb-4">
                      CastIn provides a platform for casting directors, brands,
                      and other industry professionals to post casting
                      opportunities. When posting casting calls, you must:
                    </p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        Provide accurate and complete information about the
                        opportunity
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        Clearly state compensation terms (paid, unpaid,
                        exposure, etc.)
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        Clearly describe the nature of the work and any
                        requirements
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        Only post legitimate opportunities with genuine intent
                        to cast
                      </li>
                    </ul>
                    <div className="bg-yellow-500/10 p-4 rounded-lg mb-4">
                      <h3 className="text-foreground font-medium mb-2">
                        Important Notice
                      </h3>
                      <p className="text-sm">
                        CastIn does not directly verify the legitimacy of every
                        casting opportunity posted on our platform. We rely on
                        our community to report suspicious listings. Users are
                        advised to conduct their own due diligence before
                        applying to or participating in any casting opportunity.
                      </p>
                    </div>
                    <p>
                      CastIn reserves the right to remove casting opportunities
                      that appear fraudulent, deceptive, or that violate our
                      community guidelines or these Terms.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Payments and Fees */}
              <motion.div
                variants={item}
                id="payments"
                className="scroll-mt-20"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary">
                    <DollarSign className="h-4 w-4 mr-2" />
                    <span className="text-sm font-medium">
                      Payments and Fees
                    </span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleSection("payments")}
                    className="h-8 w-8 p-0"
                  >
                    {expandedSection === "payments" ? "−" : "+"}
                  </Button>
                </div>
                <h2 className="text-2xl font-bold mb-4">Payments and Fees</h2>
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    expandedSection === "payments"
                      ? "max-h-[2000px]"
                      : "max-h-32"
                  }`}
                >
                  <div className="prose dark:prose-invert text-muted-foreground">
                    <p className="mb-4">
                      CastIn offers both free and premium services. Premium
                      subscriptions and features are available for purchase
                      through the Service.
                    </p>
                    <h3 className="text-lg font-medium text-foreground mt-6 mb-3">
                      Premium Subscriptions
                    </h3>
                    <p className="mb-4">
                      Premium subscriptions are billed on a recurring basis
                      according to the terms specified at the time of purchase.
                      You can cancel your subscription at any time, but no
                      refunds will be provided for the current billing period.
                    </p>
                    <h3 className="text-lg font-medium text-foreground mt-6 mb-3">
                      Cancellation and Refunds
                    </h3>
                    <p className="mb-4">
                      You can cancel your subscription by accessing your account
                      settings. If you cancel, you may continue to use the
                      premium features until the end of your current billing
                      period, after which your account will revert to the free
                      tier.
                    </p>
                    <div className="bg-muted/40 p-4 rounded-lg">
                      <h4 className="font-medium text-foreground mb-2">
                        Fee Changes
                      </h4>
                      <p>
                        CastIn reserves the right to change subscription fees at
                        any time. We will provide reasonable notice of any price
                        changes to affected users. By continuing to use the
                        Service after price changes come into effect, you agree
                        to pay the updated fee amount.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Limitations of Liability */}
              <motion.div
                variants={item}
                id="liability"
                className="scroll-mt-20"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary">
                    <AlertTriangle className="h-4 w-4 mr-2" />
                    <span className="text-sm font-medium">
                      Limitations of Liability
                    </span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleSection("liability")}
                    className="h-8 w-8 p-0"
                  >
                    {expandedSection === "liability" ? "−" : "+"}
                  </Button>
                </div>
                <h2 className="text-2xl font-bold mb-4">
                  Limitations of Liability
                </h2>
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    expandedSection === "liability"
                      ? "max-h-[2000px]"
                      : "max-h-32"
                  }`}
                >
                  <div className="prose dark:prose-invert text-muted-foreground">
                    <p className="mb-4">
                      CastIn provides the Service on an "as is" and "as
                      available" basis. We make no representations or warranties
                      of any kind, express or implied, regarding the operation
                      of the Service or the information, content, or materials
                      included.
                    </p>
                    <p className="mb-4">
                      To the fullest extent permitted by applicable law, CastIn
                      and its officers, directors, employees, and agents exclude
                      all warranties, express or implied, in connection with the
                      Service and your use thereof. We will not be liable for
                      any indirect, incidental, special, consequential, or
                      punitive damages, including loss of profits, data, or
                      other intangible losses.
                    </p>
                    <div className="bg-muted/40 p-4 rounded-lg mb-4">
                      <h3 className="text-foreground font-medium mb-2">
                        Third-Party Interactions
                      </h3>
                      <p className="text-sm">
                        CastIn is not responsible for any interactions or
                        disputes between users or between users and third
                        parties. Any transactions, communications, or other
                        dealings you have with other users or third parties
                        found through the Service are solely between you and
                        such other party.
                      </p>
                    </div>
                    <p>
                      Some jurisdictions do not allow the exclusion of certain
                      warranties or the limitation or exclusion of liability for
                      incidental or consequential damages. Accordingly, some of
                      the above limitations may not apply to you.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Agreement CTA */}
              <motion.div
                variants={item}
                className="mt-16 p-8 rounded-xl bg-gradient-to-r from-primary/20 to-blue-500/20 text-center"
              >
                <h2 className="text-2xl font-bold mb-4">
                  Questions About Our Terms?
                </h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  If you have any questions about these Terms of Service, please
                  contact our legal team for clarification.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild>
                    <a href="mailto:contact@cast-in.app">Contact Legal Team</a>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/privacy">View Privacy Policy</Link>
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
