import { DialogPortal } from "@radix-ui/react-dialog"
import type { FC, ReactNode } from "react"
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "./ui/dialog"

interface Props {
  id?: number
  content: string
  details: string
  children: ReactNode
}

const XmasDialog: FC<Props> = ({ children, ...props }) => {
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogPortal>
        <DialogContent className="text-black">
          <DialogTitle>{props.content}</DialogTitle>
          <DialogDescription>{props.details}</DialogDescription>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  )
}

export default XmasDialog
