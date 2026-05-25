import type { LucideIcon } from "lucide-react";
import {
  ShieldCheck, Users, BarChart3, FileSpreadsheet, Bell, CreditCard,
  CalendarCheck, CalendarDays, Bot, Workflow, Receipt, Cloud,
  Smartphone, Settings, Building2, ClipboardList, Plug, Mail,
  Moon, MessageSquare, Activity, Upload, Image, Search, Globe,
  Lock, UserCircle, LineChart, CheckSquare, BadgeDollarSign,
  ShoppingCart, Heart, Package, Languages, Palette,
  MousePointerSquareDashed, FileText, Webhook, Database, Server,
  WifiOff, Gauge, Bug, Shield, RefreshCcw, LayoutDashboard,
  BookOpen, Video, Radio, BellRing, MapPinned, Map, ScanLine,
  KeyRound, Brain, Mic, Star, MessageCircle, FlaskConical,
  Fingerprint, FileCheck, Blocks, Cpu, Store, UsersRound,
  GitBranch, Route, Boxes, Container, GitPullRequest, Sparkles,
  Ticket
} from "lucide-react";

interface Props {
  name: string;
}

const iconMap: Record<string, LucideIcon> = {
  "User Authentication": ShieldCheck,
  "Role Based Access": Users,
  "Analytics Dashboard": BarChart3,
  "Reports Export": FileSpreadsheet,
  Notifications: Bell,
  "Payment Integration": CreditCard,
  Attendance: CalendarCheck,
  "Appointment Booking": CalendarDays,
  "AI Assistant": Bot,
  "CRM Pipeline": Workflow,
  "Invoice Generator": Receipt,
  "Cloud Backup": Cloud,
  "Mobile Responsive": Smartphone,
  "Admin Control": Settings,
  "Multi Tenant": Building2,
  "Audit Logs": ClipboardList,
  "API Integration": Plug,
  "Email Automation": Mail,
  "Dark Mode": Moon,
  "Real Time Chat": MessageSquare,
  "Live Updates": Activity,
  "File Upload": Upload,
  "Image Optimization": Image,
  "Search & Filter": Search,
  "SEO Optimization": Globe,
  "Social Login": Users,
  "Two Factor Authentication": Lock,
  "Session Management": ShieldCheck,
  "User Profile Management": UserCircle,
  "Activity Tracking": Activity,
  "Data Visualization": LineChart,
  "Calendar Integration": CalendarDays,
  "Task Management": CheckSquare,
  "Team Collaboration": UsersRound,
  "Subscription Plans": BadgeDollarSign,
  "Coupon System": Ticket,
  "Shopping Cart": ShoppingCart,
  Wishlist: Heart,
  "Order Tracking": Package,
  "Inventory Management": Boxes,
  "Multi Language Support": Languages,
  "Theme Customization": Palette,
  "Drag And Drop Builder": MousePointerSquareDashed,
  "PDF Generation": FileText,
  "CSV Import Export": Database,
  "Webhook Support": Webhook,
  "REST API": Plug,
  "GraphQL API": Route,
  "Server Side Rendering": Server,
  "Static Site Generation": LayoutDashboard,
  "Progressive Web App": Smartphone,
  "Offline Support": WifiOff,
  "Caching System": Database,
  "Performance Monitoring": Gauge,
  "Error Logging": Bug,
  "Security Monitoring": Shield,
  "Backup & Restore": RefreshCcw,
  "Content Management System": LayoutDashboard,
  "Blog Management": BookOpen,
  "Video Streaming": Video,
  "Live Streaming": Radio,
  "Chatbot Integration": Bot,
  "Push Notifications": BellRing,
  "Location Tracking": MapPinned,
  "Maps Integration": Map,
  "QR Code Scanner": ScanLine,
  "OTP Verification": KeyRound,
  "Admin Analytics": BarChart3,
  "AI Recommendations": Brain,
  "Voice Search": Mic,
  "Realtime Collaboration": UsersRound,
  "Comment System": MessageCircle,
  "Rating & Reviews": Star,
  "User Feedback System": MessageSquare,
  "Feature Flags": FlaskConical,
  "A/B Testing": FlaskConical,
  "Fraud Detection": Shield,
  "Document Verification": FileCheck,
  "KYC Verification": Fingerprint,
  "Blockchain Integration": Blocks,
  "IoT Dashboard": Cpu,
  "Marketplace System": Store,
  "Affiliate System": UsersRound,
  "Referral Program": GitBranch,
  "Workflow Automation": Workflow,
  "Custom Forms": ClipboardList,
  "Dynamic Routing": Route,
  "Microservices Support": Boxes,
  "Docker Support": Container,
  "CI/CD Integration": GitPullRequest,
};

export default function FeatureBadge({ name }: Props) {
  const Icon = iconMap[name] || Sparkles;

  return (
    <div className="group/badge inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-wider text-[#030303] select-none py-0.5">
      {/* ⚡ Clean Cyber Bullet Block instead of heavy card frames */}
      <span className="w-1.5 h-1.5 bg-cyan-500 shadow-[0_0_8px_rgba(34,211,238,0.7)] shrink-0 group-hover/badge:scale-125 transition-transform duration-200" />
      
      {/* Tiny Responsive Minimal Icon layout */}
      <Icon className="h-3.5 w-3.5 text-zinc-600 transition-colors duration-200 group-hover/badge:text-cyan-600 shrink-0" />

      {/* High-Contrast text matching the parent lists perfectly */}
      <span className="text-zinc-800 transition-colors duration-200 group-hover/badge:text-black truncate">
        {name}
      </span>
    </div>
  );
}