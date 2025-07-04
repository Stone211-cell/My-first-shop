'use client'

import { useTransition } from 'react'
import { createCheckoutSession } from '@/actions/actions' 

export default function CheckoutForm({ params }: { params: { id: string } }) {
  const [isPending, startTransition] = useTransition()

  const handleCheckout = () => {
    startTransition(async () => {
      try {
        const url = await createCheckoutSession(params.id)
        if (url) {
          window.location.href = url // เปลี่ยนหน้าไป Stripe ทันที
        }
      } catch (error) {
        alert("เกิดข้อผิดพลาดในการสร้าง checkout session")
      }
    })
  }

  return (
    <button
      onClick={handleCheckout}
      disabled={isPending}
      className="bg-blue-600 text-white py-2 px-4 rounded"
    >
      {isPending ? "กำลังโหลด..." : "ดำเนินการชำระเงิน"}
    </button>
  )
}
