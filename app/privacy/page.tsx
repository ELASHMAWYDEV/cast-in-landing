"use client";

import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Shield,
  LockKeyhole,
  Fingerprint,
  Eye,
  UserCheck,
  BookOpen,
} from "lucide-react";

export default function PrivacyPolicy() {
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
    { id: "introduction", title: "Introduction", icon: BookOpen },
    { id: "collection", title: "Information We Collect", icon: Fingerprint },
    { id: "use", title: "How We Use Your Information", icon: LockKeyhole },
    { id: "sharing", title: "Information Sharing", icon: UserCheck },
    { id: "rights", title: "Your Privacy Rights", icon: Shield },
    { id: "security", title: "Data Security", icon: Eye },
  ];

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
              Privacy Policy
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              How we protect and manage your data at CastIn
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
                {tableOfContents.map((item, i) => {
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
                  <h4 className="font-medium text-sm mb-2">Need Help?</h4>
                  <p className="text-xs text-muted-foreground mb-2">
                    If you have questions about our privacy practices, contact
                    us:
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
                id="introduction"
                className="scroll-mt-20"
              >
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary mb-4">
                  <BookOpen className="h-4 w-4 mr-2" />
                  <span className="text-sm font-medium">Introduction</span>
                </div>
                <h2 className="text-2xl font-bold mb-4">Welcome to CastIn</h2>
                <div className="prose dark:prose-invert text-muted-foreground">
                  <p className="mb-4">
                    At CastIn, we take your privacy seriously. This Privacy
                    Policy explains how we collect, use, disclose, and safeguard
                    your information when you use our social networking platform
                    for the casting industry.
                  </p>
                  <p className="mb-4">
                    Our platform connects models, casting directors, and brands,
                    helping industry professionals showcase their work, find
                    opportunities, and build their networks. To provide these
                    services, we need to collect and use certain personal
                    information.
                  </p>
                  <p>
                    By accessing or using CastIn, you agree to the collection
                    and use of information in accordance with this policy.
                  </p>
                </div>
              </motion.div>

              {/* Information We Collect */}
              <motion.div
                variants={item}
                id="collection"
                className="scroll-mt-20"
              >
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary mb-4">
                  <Fingerprint className="h-4 w-4 mr-2" />
                  <span className="text-sm font-medium">
                    Information We Collect
                  </span>
                </div>
                <h2 className="text-2xl font-bold mb-4">
                  Information We Collect
                </h2>
                <div className="prose dark:prose-invert text-muted-foreground">
                  <h3 className="text-lg font-medium text-foreground mt-6 mb-3">
                    Account Information
                  </h3>
                  <p className="mb-4">
                    When you create a CastIn account, we collect information
                    such as your name, email address, password, phone number,
                    professional role (model, casting director, etc.), and
                    profile photo.
                  </p>

                  <h3 className="text-lg font-medium text-foreground mt-6 mb-3">
                    Profile Information
                  </h3>
                  <p className="mb-4">
                    To help you build a professional presence, we collect
                    additional information you provide in your profile,
                    including but not limited to your portfolio images, physical
                    attributes (for models), professional experience, biography,
                    location, and social media links.
                  </p>

                  <h3 className="text-lg font-medium text-foreground mt-6 mb-3">
                    Usage Information
                  </h3>
                  <p className="mb-4">
                    We collect information about how you use CastIn, including
                    the content you view, features you use, actions you take,
                    and the time, frequency and duration of your activities.
                  </p>

                  <h3 className="text-lg font-medium text-foreground mt-6 mb-3">
                    Communications
                  </h3>
                  <p>
                    We collect information when you communicate with other users
                    through our platform, including messages regarding casting
                    opportunities and professional collaborations.
                  </p>
                </div>
              </motion.div>

              {/* How We Use Your Information */}
              <motion.div variants={item} id="use" className="scroll-mt-20">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary mb-4">
                  <LockKeyhole className="h-4 w-4 mr-2" />
                  <span className="text-sm font-medium">
                    Use of Information
                  </span>
                </div>
                <h2 className="text-2xl font-bold mb-4">
                  How We Use Your Information
                </h2>
                <div className="prose dark:prose-invert text-muted-foreground">
                  <p className="mb-4">We use the information we collect to:</p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      Provide, maintain, and improve the CastIn platform for all
                      users
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      Connect models with appropriate casting opportunities
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      Help casting directors find suitable talent for their
                      projects
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      Personalize your experience and deliver relevant content
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      Process transactions and manage your account
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      Send you technical notices, updates, and support messages
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      Respond to your comments and questions and provide
                      customer service
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      Monitor and analyze trends, usage, and activities in
                      connection with our services
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      Detect, investigate, and prevent fraudulent activities and
                      other misuses
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Information Sharing */}
              <motion.div variants={item} id="sharing" className="scroll-mt-20">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary mb-4">
                  <UserCheck className="h-4 w-4 mr-2" />
                  <span className="text-sm font-medium">
                    Information Sharing
                  </span>
                </div>
                <h2 className="text-2xl font-bold mb-4">Information Sharing</h2>
                <div className="prose dark:prose-invert text-muted-foreground">
                  <p className="mb-4">
                    CastIn is designed to help industry professionals connect,
                    so some information is visible to others:
                  </p>
                  <h3 className="text-lg font-medium text-foreground mt-6 mb-3">
                    Public Profile Information
                  </h3>
                  <p className="mb-4">
                    Your profile information, including your name, photos,
                    professional details, and portfolio, is visible to other
                    CastIn users to facilitate professional connections. You can
                    adjust your profile visibility settings in your account.
                  </p>

                  <h3 className="text-lg font-medium text-foreground mt-6 mb-3">
                    Service Providers
                  </h3>
                  <p className="mb-4">
                    We may share information with third-party vendors and
                    service providers who perform services on our behalf, such
                    as payment processing, data analysis, email delivery,
                    hosting services, and customer service.
                  </p>

                  <h3 className="text-lg font-medium text-foreground mt-6 mb-3">
                    Legal Requirements
                  </h3>
                  <p>
                    We may disclose your information where required to do so by
                    law or in response to valid requests by public authorities
                    (e.g., a court or government agency).
                  </p>
                </div>
              </motion.div>

              {/* Your Privacy Rights */}
              <motion.div variants={item} id="rights" className="scroll-mt-20">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary mb-4">
                  <Shield className="h-4 w-4 mr-2" />
                  <span className="text-sm font-medium">Privacy Rights</span>
                </div>
                <h2 className="text-2xl font-bold mb-4">Your Privacy Rights</h2>
                <div className="prose dark:prose-invert text-muted-foreground">
                  <p className="mb-4">
                    Depending on your location, you may have certain rights
                    regarding your personal information:
                  </p>
                  <div className="bg-card rounded-xl border p-6 mb-4">
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="mr-2 text-primary font-bold">•</span>
                        <span>
                          <strong className="text-foreground">Access:</strong>{" "}
                          You can request copies of your personal information.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-primary font-bold">•</span>
                        <span>
                          <strong className="text-foreground">
                            Correction:
                          </strong>{" "}
                          You can request that we correct inaccurate
                          information.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-primary font-bold">•</span>
                        <span>
                          <strong className="text-foreground">Deletion:</strong>{" "}
                          You can request that we delete your personal
                          information.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-primary font-bold">•</span>
                        <span>
                          <strong className="text-foreground">
                            Portability:
                          </strong>{" "}
                          You can request a transfer of your data.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-primary font-bold">•</span>
                        <span>
                          <strong className="text-foreground">Opt-out:</strong>{" "}
                          You can opt out of certain data uses, such as
                          marketing.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <p>
                    To exercise any of these rights, please contact us at
                    contact@cast-in.app. We will respond to your request in
                    accordance with applicable laws.
                  </p>
                </div>
              </motion.div>

              {/* Data Security */}
              <motion.div
                variants={item}
                id="security"
                className="scroll-mt-20"
              >
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary mb-4">
                  <Eye className="h-4 w-4 mr-2" />
                  <span className="text-sm font-medium">Data Security</span>
                </div>
                <h2 className="text-2xl font-bold mb-4">Data Security</h2>
                <div className="prose dark:prose-invert text-muted-foreground">
                  <p className="mb-4">
                    We implement appropriate technical and organizational
                    security measures to protect your personal information from
                    unauthorized access, disclosure, alteration, and
                    destruction.
                  </p>
                  <p className="mb-4">
                    However, no method of transmission over the Internet or
                    electronic storage is 100% secure. While we strive to use
                    commercially acceptable means to protect your personal
                    information, we cannot guarantee its absolute security.
                  </p>
                  <div className="mt-8 p-6 bg-muted/40 rounded-xl border">
                    <h3 className="text-lg font-medium text-foreground mb-3">
                      Changes to This Privacy Policy
                    </h3>
                    <p className="mb-4">
                      We may update our Privacy Policy from time to time. We
                      will notify you of any changes by posting the new Privacy
                      Policy on this page and updating the "Last updated" date.
                    </p>
                    <p>
                      You are advised to review this Privacy Policy periodically
                      for any changes. Changes to this Privacy Policy are
                      effective when they are posted on this page.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Contact Us CTA */}
              <motion.div
                variants={item}
                className="mt-16 p-8 rounded-xl bg-gradient-to-r from-primary/20 to-blue-500/20 text-center"
              >
                <h2 className="text-2xl font-bold mb-4">
                  Have Questions About Your Privacy?
                </h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Our dedicated privacy team is here to help you understand how
                  we protect your data and address any concerns you may have.
                </p>
                <Button asChild>
                  <a href="mailto:contact@cast-in.app">Contact Privacy Team</a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
