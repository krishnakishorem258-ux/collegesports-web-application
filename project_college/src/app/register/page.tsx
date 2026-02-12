"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import {
  Users,
  CreditCard,
  FileText,
  CheckCircle,
  ChevronRight,
  ChevronLeft,
  UserPlus,
  Trash2,
  Download,
  Printer,
  QrCode,
  Smartphone,
  Banknote,
  Building,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  TYPES                                                              */
/* ------------------------------------------------------------------ */
interface TeamMember {
  name: string;
  rollNo: string;
  department: string;
  year: string;
  phone: string;
  isCaptain: boolean;
}

interface FormData {
  teamName: string;
  sport: string;
  teamSize: number;
  members: TeamMember[];
  substitutes: TeamMember[];
  matchDate: string;
  matchTime: string;
  opponent: string;
  venue: string;
  paymentMethod: string;
  transactionId: string;
  payerName: string;
  payerPhone: string;
  amount: number;
}

const sports = [
  { name: "Cricket", teamSize: 11 },
  { name: "Football", teamSize: 11 },
  { name: "Basketball", teamSize: 5 },
  { name: "Volleyball", teamSize: 6 },
  { name: "Kabaddi", teamSize: 7 },
  { name: "Badminton (Doubles)", teamSize: 2 },
  { name: "Table Tennis (Doubles)", teamSize: 2 },
  { name: "Throwball", teamSize: 7 },
];

const venues = [
  "NNRG Main Ground",
  "NNRG Indoor Stadium",
  "NNRG Basketball Court",
  "NNRG Volleyball Court",
  "NNRG Badminton Hall",
];

const departments = [
  "CSE", "ECE", "EEE", "MECH", "CIVIL", "IT", "CSE (AI&ML)", "CSE (DS)", "MBA", "MCA", "B.Pharmacy",
];

const emptyMember = (): TeamMember => ({
  name: "",
  rollNo: "",
  department: "CSE",
  year: "1st Year",
  phone: "",
  isCaptain: false,
});

const sportFee: Record<string, number> = {
  Cricket: 2000,
  Football: 2000,
  Basketball: 1500,
  Volleyball: 1500,
  Kabaddi: 1500,
  "Badminton (Doubles)": 500,
  "Table Tennis (Doubles)": 500,
  Throwball: 1500,
};

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                          */
/* ------------------------------------------------------------------ */
export default function RegisterPage() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const receiptRef = useRef<HTMLDivElement>(null);
  const letterRef = useRef<HTMLDivElement>(null);
  const regId = useRef(`NNRG-${Date.now().toString(36).toUpperCase()}`);

  const [form, setForm] = useState<FormData>({
    teamName: "",
    sport: "",
    teamSize: 0,
    members: [],
    substitutes: [emptyMember()],
    matchDate: "",
    matchTime: "",
    opponent: "",
    venue: venues[0],
    paymentMethod: "",
    transactionId: "",
    payerName: "",
    payerPhone: "",
    amount: 0,
  });

  const steps = [
    { label: "Team Details", icon: Users },
    { label: "Members & Subs", icon: UserPlus },
    { label: "Match Schedule", icon: FileText },
    { label: "Payment", icon: CreditCard },
    { label: "Confirmation", icon: CheckCircle },
  ];

  /* helpers */
  const set = (patch: Partial<FormData>) => setForm((p) => ({ ...p, ...patch }));

  const handleSportChange = (sportName: string) => {
    const s = sports.find((sp) => sp.name === sportName);
    if (!s) return;
    const members = Array.from({ length: s.teamSize }, (_, i) => ({
      ...emptyMember(),
      isCaptain: i === 0,
    }));
    set({ sport: sportName, teamSize: s.teamSize, members, amount: sportFee[sportName] ?? 1500 });
  };

  const updateMember = (idx: number, patch: Partial<TeamMember>) =>
    setForm((p) => {
      const members = [...p.members];
      members[idx] = { ...members[idx], ...patch };
      return { ...p, members };
    });

  const updateSub = (idx: number, patch: Partial<TeamMember>) =>
    setForm((p) => {
      const substitutes = [...p.substitutes];
      substitutes[idx] = { ...substitutes[idx], ...patch };
      return { ...p, substitutes };
    });

  const addSub = () => {
    if (form.substitutes.length < 3) set({ substitutes: [...form.substitutes, emptyMember()] });
  };

  const removeSub = (idx: number) =>
    set({ substitutes: form.substitutes.filter((_, i) => i !== idx) });

  const canNext = (): boolean => {
    if (step === 0) return !!(form.teamName && form.sport);
    if (step === 1) return form.members.every((m) => m.name && m.rollNo && m.phone);
    if (step === 2) return !!(form.matchDate && form.matchTime && form.opponent);
    if (step === 3) return !!(form.paymentMethod && form.transactionId && form.payerName && form.payerPhone);
    return true;
  };

  const handleSubmit = () => setSubmitted(true);

  const printSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (!ref.current) return;
    const w = window.open("", "_blank");
    if (!w) return;
    w.document.write(`<html><head><title>Print</title><style>
      body{font-family:Arial,sans-serif;padding:40px;color:#1a1a2e}
      table{border-collapse:collapse;width:100%}
      td,th{border:1px solid #ddd;padding:8px;text-align:left;font-size:13px}
      th{background:#f5f5f5}
      h1,h2,h3{margin:0 0 8px}
      .sig-line{display:inline-block;width:200px;border-bottom:1px solid #333;margin-top:60px}
    </style></head><body>${ref.current.innerHTML}</body></html>`);
    w.document.close();
    w.print();
  };

  /* ---------------------------------------------------------------- */
  /*  STEP RENDERS                                                     */
  /* ---------------------------------------------------------------- */

  const renderStep0 = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Team Details</h2>
      <p className="text-gray-600">Enter your team information and select a sport.</p>

      <div>
        <label className="mb-1 block text-sm font-semibold text-gray-700">Team Name *</label>
        <input
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
          placeholder="e.g. NNRG Thunderbolts"
          value={form.teamName}
          onChange={(e) => set({ teamName: e.target.value })}
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-semibold text-gray-700">Select Sport *</label>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {sports.map((s) => (
            <button
              key={s.name}
              type="button"
              onClick={() => handleSportChange(s.name)}
              className={`rounded-lg border-2 p-4 text-left transition-all ${
                form.sport === s.name
                  ? "border-amber-500 bg-amber-50 shadow-md"
                  : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
              }`}
            >
              <p className="font-bold text-gray-900">{s.name}</p>
              <p className="text-xs text-gray-500">Team size: {s.teamSize} players</p>
              <p className="mt-1 text-sm font-semibold text-amber-600">Rs. {sportFee[s.name]}</p>
            </button>
          ))}
        </div>
      </div>

      {form.sport && (
        <div className="rounded-lg bg-blue-50 p-4 text-sm text-blue-800">
          <strong>{form.sport}</strong> requires <strong>{form.teamSize}</strong> players + up to <strong>3 substitutes</strong>. Registration fee: <strong>Rs. {form.amount}</strong>
        </div>
      )}
    </div>
  );

  const renderStep1 = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Team Members</h2>
      <p className="text-gray-600">
        Enter details for all {form.teamSize} players. First member is the captain.
      </p>

      {/* Main members */}
      <div className="space-y-4">
        {form.members.map((m, i) => (
          <div key={i} className="rounded-lg border border-gray-200 bg-white p-4">
            <div className="mb-3 flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1a1a2e] text-xs font-bold text-white">
                {i + 1}
              </span>
              <span className="text-sm font-semibold text-gray-700">
                {m.isCaptain ? "Captain (Team Leader)" : `Player ${i + 1}`}
              </span>
              {m.isCaptain && (
                <span className="rounded bg-amber-100 px-2 py-0.5 text-xs font-bold text-amber-700">CAPTAIN</span>
              )}
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <input
                placeholder="Full Name *"
                className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-amber-500 focus:outline-none"
                value={m.name}
                onChange={(e) => updateMember(i, { name: e.target.value })}
              />
              <input
                placeholder="Roll Number *"
                className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-amber-500 focus:outline-none"
                value={m.rollNo}
                onChange={(e) => updateMember(i, { rollNo: e.target.value })}
              />
              <input
                placeholder="Phone *"
                className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-amber-500 focus:outline-none"
                value={m.phone}
                onChange={(e) => updateMember(i, { phone: e.target.value })}
              />
              <select
                className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-amber-500 focus:outline-none"
                value={m.department}
                onChange={(e) => updateMember(i, { department: e.target.value })}
              >
                {departments.map((d) => (
                  <option key={d}>{d}</option>
                ))}
              </select>
              <select
                className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-amber-500 focus:outline-none"
                value={m.year}
                onChange={(e) => updateMember(i, { year: e.target.value })}
              >
                {["1st Year", "2nd Year", "3rd Year", "4th Year"].map((y) => (
                  <option key={y}>{y}</option>
                ))}
              </select>
            </div>
          </div>
        ))}
      </div>

      {/* Substitutes */}
      <div className="border-t pt-6">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-gray-900">Substitutes</h3>
            <p className="text-sm text-gray-500">Maximum 3 substitutes allowed</p>
          </div>
          {form.substitutes.length < 3 && (
            <button
              type="button"
              onClick={addSub}
              className="inline-flex items-center gap-1 rounded-lg bg-[#1a1a2e] px-4 py-2 text-sm font-medium text-white hover:bg-[#2a2a4e]"
            >
              <UserPlus className="h-4 w-4" /> Add Substitute
            </button>
          )}
        </div>

        <div className="space-y-4">
          {form.substitutes.map((s, i) => (
            <div key={i} className="rounded-lg border border-dashed border-amber-300 bg-amber-50/50 p-4">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm font-semibold text-amber-700">Substitute {i + 1}</span>
                <button type="button" onClick={() => removeSub(i)} className="text-red-400 hover:text-red-600">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <input
                  placeholder="Full Name"
                  className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-amber-500 focus:outline-none"
                  value={s.name}
                  onChange={(e) => updateSub(i, { name: e.target.value })}
                />
                <input
                  placeholder="Roll Number"
                  className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-amber-500 focus:outline-none"
                  value={s.rollNo}
                  onChange={(e) => updateSub(i, { rollNo: e.target.value })}
                />
                <input
                  placeholder="Phone"
                  className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-amber-500 focus:outline-none"
                  value={s.phone}
                  onChange={(e) => updateSub(i, { phone: e.target.value })}
                />
                <select
                  className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-amber-500 focus:outline-none"
                  value={s.department}
                  onChange={(e) => updateSub(i, { department: e.target.value })}
                >
                  {departments.map((d) => (
                    <option key={d}>{d}</option>
                  ))}
                </select>
                <select
                  className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-amber-500 focus:outline-none"
                  value={s.year}
                  onChange={(e) => updateSub(i, { year: e.target.value })}
                >
                  {["1st Year", "2nd Year", "3rd Year", "4th Year"].map((y) => (
                    <option key={y}>{y}</option>
                  ))}
                </select>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Match Schedule</h2>
      <p className="text-gray-600">Provide match scheduling details.</p>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-semibold text-gray-700">Match Date *</label>
          <input
            type="date"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-amber-500 focus:outline-none"
            value={form.matchDate}
            onChange={(e) => set({ matchDate: e.target.value })}
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-semibold text-gray-700">Match Time *</label>
          <input
            type="time"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-amber-500 focus:outline-none"
            value={form.matchTime}
            onChange={(e) => set({ matchTime: e.target.value })}
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-semibold text-gray-700">Opponent Team *</label>
          <input
            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-amber-500 focus:outline-none"
            placeholder="e.g. JNTU Hyderabad"
            value={form.opponent}
            onChange={(e) => set({ opponent: e.target.value })}
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-semibold text-gray-700">Venue</label>
          <select
            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-amber-500 focus:outline-none"
            value={form.venue}
            onChange={(e) => set({ venue: e.target.value })}
          >
            {venues.map((v) => (
              <option key={v}>{v}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Payment</h2>
      <p className="text-gray-600">
        Registration fee: <span className="text-xl font-bold text-amber-600">Rs. {form.amount}</span>
      </p>

      {/* Payment method selection */}
      <div>
        <label className="mb-2 block text-sm font-semibold text-gray-700">Select Payment Method *</label>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { id: "upi", label: "UPI / Google Pay", icon: QrCode, sub: "GPay, PhonePe, Paytm" },
            { id: "phonepe", label: "PhonePe", icon: Smartphone, sub: "UPI via PhonePe" },
            { id: "cash", label: "Cash", icon: Banknote, sub: "Pay at Sports Office" },
            { id: "bank", label: "Bank Transfer", icon: Building, sub: "NEFT / IMPS" },
          ].map((pm) => (
            <button
              key={pm.id}
              type="button"
              onClick={() => set({ paymentMethod: pm.id })}
              className={`rounded-lg border-2 p-4 text-left transition-all ${
                form.paymentMethod === pm.id
                  ? "border-amber-500 bg-amber-50 shadow-md"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <pm.icon className={`mb-2 h-6 w-6 ${form.paymentMethod === pm.id ? "text-amber-600" : "text-gray-400"}`} />
              <p className="font-bold text-gray-900">{pm.label}</p>
              <p className="text-xs text-gray-500">{pm.sub}</p>
            </button>
          ))}
        </div>
      </div>

      {/* UPI details */}
      {(form.paymentMethod === "upi" || form.paymentMethod === "phonepe") && (
        <div className="rounded-lg border border-amber-200 bg-amber-50 p-5">
          <h3 className="mb-2 font-bold text-amber-800">UPI Payment Details</h3>
          <p className="text-sm text-amber-700">
            Send <strong>Rs. {form.amount}</strong> to the following UPI ID:
          </p>
          <div className="mt-3 flex items-center gap-3 rounded-lg bg-white p-3">
            <QrCode className="h-16 w-16 text-[#1a1a2e]" />
            <div>
              <p className="text-lg font-bold text-gray-900">nnrgsports@ybl</p>
              <p className="text-xs text-gray-500">NNRG Sports Department</p>
            </div>
          </div>
          <p className="mt-3 text-xs text-amber-600">After payment, enter the UPI Transaction ID below.</p>
        </div>
      )}

      {/* Bank details */}
      {form.paymentMethod === "bank" && (
        <div className="rounded-lg border border-blue-200 bg-blue-50 p-5">
          <h3 className="mb-2 font-bold text-blue-800">Bank Transfer Details</h3>
          <div className="space-y-1 text-sm text-blue-700">
            <p><strong>Account Name:</strong> NNRG Sports Fund</p>
            <p><strong>Account No:</strong> 1234 5678 9012 3456</p>
            <p><strong>IFSC:</strong> SBIN0012345</p>
            <p><strong>Bank:</strong> State Bank of India, Hyderabad</p>
          </div>
          <p className="mt-3 text-xs text-blue-600">After transfer, enter the reference/transaction number below.</p>
        </div>
      )}

      {/* Cash */}
      {form.paymentMethod === "cash" && (
        <div className="rounded-lg border border-green-200 bg-green-50 p-5">
          <h3 className="mb-2 font-bold text-green-800">Cash Payment</h3>
          <p className="text-sm text-green-700">
            Visit the <strong>NNRG Sports Office, Room 102, Admin Block</strong> and pay <strong>Rs. {form.amount}</strong>. Collect a receipt and enter the receipt number below.
          </p>
        </div>
      )}

      {/* Common fields */}
      {form.paymentMethod && (
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-semibold text-gray-700">
              {form.paymentMethod === "cash" ? "Receipt Number" : "Transaction / Reference ID"} *
            </label>
            <input
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-amber-500 focus:outline-none"
              placeholder="e.g. TXN123456789"
              value={form.transactionId}
              onChange={(e) => set({ transactionId: e.target.value })}
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-semibold text-gray-700">Payer Name *</label>
            <input
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-amber-500 focus:outline-none"
              placeholder="Name of person who paid"
              value={form.payerName}
              onChange={(e) => set({ payerName: e.target.value })}
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-semibold text-gray-700">Payer Phone *</label>
            <input
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-amber-500 focus:outline-none"
              placeholder="10-digit mobile number"
              value={form.payerPhone}
              onChange={(e) => set({ payerPhone: e.target.value })}
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-semibold text-gray-700">Amount</label>
            <input
              className="w-full rounded-lg border border-gray-300 bg-gray-100 px-4 py-3 font-bold text-gray-900"
              value={`Rs. ${form.amount}`}
              readOnly
            />
          </div>
        </div>
      )}
    </div>
  );

  const captain = form.members.find((m) => m.isCaptain) || form.members[0];

  const renderStep4 = () => (
    <div className="space-y-8">
      <div className="text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <CheckCircle className="h-10 w-10 text-green-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Registration Successful!</h2>
        <p className="mt-1 text-gray-600">Registration ID: <strong className="text-amber-600">{regId.current}</strong></p>
      </div>

      {/* -------- PAYMENT RECEIPT -------- */}
      <div className="rounded-xl border-2 border-gray-200 bg-white">
        <div className="flex items-center justify-between border-b px-6 py-4">
          <h3 className="text-lg font-bold text-gray-900">Payment Receipt</h3>
          <div className="flex gap-2">
            <button onClick={() => printSection(receiptRef)} className="inline-flex items-center gap-1 rounded-lg bg-[#1a1a2e] px-3 py-1.5 text-xs font-medium text-white hover:bg-[#2a2a4e]">
              <Printer className="h-3.5 w-3.5" /> Print
            </button>
            <button onClick={() => printSection(receiptRef)} className="inline-flex items-center gap-1 rounded-lg border border-gray-300 px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50">
              <Download className="h-3.5 w-3.5" /> Download
            </button>
          </div>
        </div>
        <div ref={receiptRef} className="p-6">
          <div className="mb-6 text-center">
            <h1 style={{ fontSize: 22, fontWeight: 800, color: "#1a1a2e" }}>
              Nalla Narasimha Reddy Group of Institutions
            </h1>
            <p style={{ fontSize: 12, color: "#666" }}>Dichpally, Kamareddy Dist., Telangana - 503175</p>
            <p style={{ fontSize: 14, fontWeight: 700, color: "#b45309", marginTop: 4 }}>SPORTS DEPARTMENT - PAYMENT RECEIPT</p>
            <hr style={{ margin: "12px 0" }} />
          </div>

          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
            <tbody>
              <tr>
                <td style={{ padding: 6, fontWeight: 600 }}>Receipt No:</td>
                <td style={{ padding: 6 }}>{regId.current}</td>
                <td style={{ padding: 6, fontWeight: 600 }}>Date:</td>
                <td style={{ padding: 6 }}>{new Date().toLocaleDateString("en-IN")}</td>
              </tr>
              <tr>
                <td style={{ padding: 6, fontWeight: 600 }}>Team Name:</td>
                <td style={{ padding: 6 }}>{form.teamName}</td>
                <td style={{ padding: 6, fontWeight: 600 }}>Sport:</td>
                <td style={{ padding: 6 }}>{form.sport}</td>
              </tr>
              <tr>
                <td style={{ padding: 6, fontWeight: 600 }}>Payer Name:</td>
                <td style={{ padding: 6 }}>{form.payerName}</td>
                <td style={{ padding: 6, fontWeight: 600 }}>Phone:</td>
                <td style={{ padding: 6 }}>{form.payerPhone}</td>
              </tr>
              <tr>
                <td style={{ padding: 6, fontWeight: 600 }}>Payment Method:</td>
                <td style={{ padding: 6 }}>{form.paymentMethod.toUpperCase()}</td>
                <td style={{ padding: 6, fontWeight: 600 }}>Transaction ID:</td>
                <td style={{ padding: 6 }}>{form.transactionId}</td>
              </tr>
              <tr style={{ background: "#fef3c7" }}>
                <td style={{ padding: 8, fontWeight: 700, fontSize: 15 }}>Amount Paid:</td>
                <td colSpan={3} style={{ padding: 8, fontWeight: 700, fontSize: 15, color: "#b45309" }}>
                  Rs. {form.amount}/-
                </td>
              </tr>
            </tbody>
          </table>

          <div style={{ marginTop: 40, display: "flex", justifyContent: "space-between", fontSize: 12 }}>
            <div style={{ textAlign: "center" }}>
              <div className="sig-line" style={{ width: 180, borderBottom: "1px solid #333", marginBottom: 4, height: 1 }} />
              <p style={{ fontWeight: 600 }}>Received By</p>
              <p>Sports Office, NNRG</p>
            </div>
            <div style={{ textAlign: "center" }}>
              <div className="sig-line" style={{ width: 180, borderBottom: "1px solid #333", marginBottom: 4, height: 1 }} />
              <p style={{ fontWeight: 600 }}>Team Captain</p>
              <p>{captain?.name || ""}</p>
            </div>
          </div>
        </div>
      </div>

      {/* -------- PERMISSION LETTER -------- */}
      <div className="rounded-xl border-2 border-gray-200 bg-white">
        <div className="flex items-center justify-between border-b px-6 py-4">
          <h3 className="text-lg font-bold text-gray-900">Permission Letter</h3>
          <div className="flex gap-2">
            <button onClick={() => printSection(letterRef)} className="inline-flex items-center gap-1 rounded-lg bg-[#1a1a2e] px-3 py-1.5 text-xs font-medium text-white hover:bg-[#2a2a4e]">
              <Printer className="h-3.5 w-3.5" /> Print
            </button>
            <button onClick={() => printSection(letterRef)} className="inline-flex items-center gap-1 rounded-lg border border-gray-300 px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50">
              <Download className="h-3.5 w-3.5" /> Download
            </button>
          </div>
        </div>
        <div ref={letterRef} className="p-6">
          <div style={{ textAlign: "center", marginBottom: 24 }}>
            <h1 style={{ fontSize: 22, fontWeight: 800, color: "#1a1a2e", marginBottom: 2 }}>
              NALLA NARASIMHA REDDY GROUP OF INSTITUTIONS
            </h1>
            <p style={{ fontSize: 11, color: "#666", marginBottom: 2 }}>Affiliated to JNTU Hyderabad | Approved by AICTE, New Delhi</p>
            <p style={{ fontSize: 11, color: "#666" }}>Dichpally, Kamareddy Dist., Telangana - 503175</p>
            <div style={{ borderTop: "3px double #1a1a2e", borderBottom: "1px solid #1a1a2e", margin: "12px auto", width: "80%", height: 4 }} />
            <p style={{ fontSize: 16, fontWeight: 700, color: "#b45309", letterSpacing: 2 }}>PERMISSION LETTER FOR SPORTS PARTICIPATION</p>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, marginBottom: 16 }}>
            <p><strong>Ref No:</strong> NNRG/SPORTS/{regId.current}</p>
            <p><strong>Date:</strong> {new Date().toLocaleDateString("en-IN")}</p>
          </div>

          <div style={{ fontSize: 13, lineHeight: 1.8, color: "#222" }}>
            <p style={{ marginBottom: 12 }}>
              <strong>To Whom It May Concern,</strong>
            </p>
            <p style={{ marginBottom: 12, textAlign: "justify" }}>
              This is to certify that the team <strong>&quot;{form.teamName}&quot;</strong> comprising of{" "}
              <strong>{form.teamSize} players</strong> and <strong>{form.substitutes.filter((s) => s.name).length} substitute(s)</strong>{" "}
              from <strong>Nalla Narasimha Reddy Group of Institutions (NNRG)</strong>, are hereby granted permission to participate in the{" "}
              <strong>{form.sport}</strong> match scheduled on <strong>{form.matchDate ? new Date(form.matchDate).toLocaleDateString("en-IN", { weekday: "long", year: "numeric", month: "long", day: "numeric" }) : ""}</strong>{" "}
              at <strong>{form.matchTime}</strong> against <strong>{form.opponent}</strong> at <strong>{form.venue}</strong>.
            </p>

            <p style={{ marginBottom: 8, fontWeight: 600 }}>Team Members:</p>
            <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: 12 }}>
              <thead>
                <tr style={{ background: "#f5f5f5" }}>
                  <th style={{ border: "1px solid #ddd", padding: 6, fontSize: 11, textAlign: "left" }}>S.No</th>
                  <th style={{ border: "1px solid #ddd", padding: 6, fontSize: 11, textAlign: "left" }}>Name</th>
                  <th style={{ border: "1px solid #ddd", padding: 6, fontSize: 11, textAlign: "left" }}>Roll No</th>
                  <th style={{ border: "1px solid #ddd", padding: 6, fontSize: 11, textAlign: "left" }}>Dept</th>
                  <th style={{ border: "1px solid #ddd", padding: 6, fontSize: 11, textAlign: "left" }}>Year</th>
                  <th style={{ border: "1px solid #ddd", padding: 6, fontSize: 11, textAlign: "left" }}>Role</th>
                </tr>
              </thead>
              <tbody>
                {form.members.map((m, i) => (
                  <tr key={i}>
                    <td style={{ border: "1px solid #ddd", padding: 5, fontSize: 11 }}>{i + 1}</td>
                    <td style={{ border: "1px solid #ddd", padding: 5, fontSize: 11 }}>{m.name}</td>
                    <td style={{ border: "1px solid #ddd", padding: 5, fontSize: 11 }}>{m.rollNo}</td>
                    <td style={{ border: "1px solid #ddd", padding: 5, fontSize: 11 }}>{m.department}</td>
                    <td style={{ border: "1px solid #ddd", padding: 5, fontSize: 11 }}>{m.year}</td>
                    <td style={{ border: "1px solid #ddd", padding: 5, fontSize: 11 }}>{m.isCaptain ? "Captain" : "Player"}</td>
                  </tr>
                ))}
                {form.substitutes.filter((s) => s.name).map((s, i) => (
                  <tr key={`sub-${i}`} style={{ background: "#fffbeb" }}>
                    <td style={{ border: "1px solid #ddd", padding: 5, fontSize: 11 }}>{form.members.length + i + 1}</td>
                    <td style={{ border: "1px solid #ddd", padding: 5, fontSize: 11 }}>{s.name}</td>
                    <td style={{ border: "1px solid #ddd", padding: 5, fontSize: 11 }}>{s.rollNo}</td>
                    <td style={{ border: "1px solid #ddd", padding: 5, fontSize: 11 }}>{s.department}</td>
                    <td style={{ border: "1px solid #ddd", padding: 5, fontSize: 11 }}>{s.year}</td>
                    <td style={{ border: "1px solid #ddd", padding: 5, fontSize: 11 }}>Substitute</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <p style={{ marginBottom: 12, textAlign: "justify" }}>
              The above students are bonafide students of NNRG and are permitted to represent the institution in the said sports event.
              Maximum of <strong>3 substitutions</strong> are allowed during the match as per the tournament rules.
              The registration fee of <strong>Rs. {form.amount}/-</strong> has been duly paid (Transaction ID: <strong>{form.transactionId}</strong>).
            </p>

            <p>Kindly grant them the necessary cooperation and support.</p>
          </div>

          {/* Signatures */}
          <div style={{ marginTop: 60, display: "flex", justifyContent: "space-between", fontSize: 12 }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ width: 180, borderBottom: "1px solid #333", marginBottom: 6, marginLeft: "auto", marginRight: "auto" }}>&nbsp;</div>
              <p style={{ fontWeight: 700, color: "#1a1a2e" }}>Dr. K. Ramesh Reddy</p>
              <p>Head of Department</p>
              <p style={{ fontSize: 10, color: "#666" }}>Department of {captain?.department || "CSE"}</p>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ width: 180, borderBottom: "1px solid #333", marginBottom: 6, marginLeft: "auto", marginRight: "auto" }}>&nbsp;</div>
              <p style={{ fontWeight: 700, color: "#1a1a2e" }}>Mr. P. Srinivas</p>
              <p>Sports Incharge</p>
              <p style={{ fontSize: 10, color: "#666" }}>Dept. of Physical Education</p>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ width: 180, borderBottom: "1px solid #333", marginBottom: 6, marginLeft: "auto", marginRight: "auto" }}>&nbsp;</div>
              <p style={{ fontWeight: 700, color: "#1a1a2e" }}>Dr. M. Suresh Kumar</p>
              <p>Principal</p>
              <p style={{ fontSize: 10, color: "#666" }}>NNRG</p>
            </div>
          </div>

          <div style={{ marginTop: 30, textAlign: "center", fontSize: 10, color: "#999", borderTop: "1px solid #eee", paddingTop: 10 }}>
            This is a computer-generated document. Signatures are required for official use.
            <br />
            NNRG Sports Department | nnrgsports@nnrg.edu.in | +91 98765 43210
          </div>
        </div>
      </div>
    </div>
  );

  const renderCurrentStep = () => {
    if (submitted) return renderStep4();
    switch (step) {
      case 0: return renderStep0();
      case 1: return renderStep1();
      case 2: return renderStep2();
      case 3: return renderStep3();
      default: return renderStep0();
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#1a1a2e] text-white" style={{ minHeight: 220 }}>
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/b9d243db-c24f-4561-af2c-7ae62438f5d8/CJG1-1770830673280.jpeg?width=8000&height=8000&resize=contain"
          alt="NNRG Campus"
          fill
          className="object-cover opacity-30"
        />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold sm:text-4xl">Team Registration</h1>
          <p className="mt-2 max-w-xl text-gray-300">
            Register your team, schedule a match, and complete payment to participate in NNRG sports events.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Step indicator */}
        {!submitted && (
          <div className="mb-10">
            <div className="flex items-center justify-between">
              {steps.map((s, i) => (
                <div key={s.label} className="flex flex-1 items-center">
                  <div className="flex flex-col items-center">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold transition-colors ${
                        i < step
                          ? "bg-green-500 text-white"
                          : i === step
                          ? "bg-amber-500 text-white"
                          : "bg-gray-200 text-gray-500"
                      }`}
                    >
                      {i < step ? <CheckCircle className="h-5 w-5" /> : <s.icon className="h-5 w-5" />}
                    </div>
                    <span className="mt-1 hidden text-xs font-medium text-gray-600 sm:block">{s.label}</span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className={`mx-2 h-0.5 flex-1 ${i < step ? "bg-green-500" : "bg-gray-200"}`} />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Form content */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          {renderCurrentStep()}
        </div>

        {/* Navigation */}
        {!submitted && (
          <div className="mt-6 flex items-center justify-between">
            <button
              type="button"
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              disabled={step === 0}
              className="inline-flex items-center gap-1 rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronLeft className="h-4 w-4" /> Previous
            </button>

            {step < 3 ? (
              <button
                type="button"
                onClick={() => setStep((s) => s + 1)}
                disabled={!canNext()}
                className="inline-flex items-center gap-1 rounded-lg bg-amber-500 px-6 py-2.5 text-sm font-bold text-white transition-colors hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Next <ChevronRight className="h-4 w-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={!canNext()}
                className="inline-flex items-center gap-1 rounded-lg bg-green-600 px-6 py-2.5 text-sm font-bold text-white transition-colors hover:bg-green-500 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <CheckCircle className="h-4 w-4" /> Submit Registration
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
