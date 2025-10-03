import { Button } from "@/components/ui/button"
import Image from "next/image"

function PlaygroundHeader() {
    return (
        <div className="flex justify-between items-center p-4 shadow">
            <Image src="/logo.svg" alt="Logo" width={35} height={35} />
            <Button>Save</Button>
            </div>
    )
}
export default PlaygroundHeader