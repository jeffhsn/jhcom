import Link from 'next/link'
import { DoorOpen } from 'lucide-react'

export default function HouseDoor() {
	return (
		<Link href="/door" className="house-door" aria-label="Enter">
			<DoorOpen className="h-7 w-7 shrink-0" aria-hidden />
			<span className="font-semibold">Enter</span>
		</Link>
	)
}
