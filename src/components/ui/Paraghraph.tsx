import * as React from "react";
import { cn } from "../../lib/utils";
import { cva, VariantProps } from 'class-variance-authority';

const paraghraphVariants = cva(
   'max-w-prose text-black font-medium', {
      variants: { 
         size: {
            default: 'text-base md:text-lg',
            sm: 'text-sm'
         }
      },
      defaultVariants: {
         size: "default"
      }
      
   }
)

interface ParaghraphProps 
   extends React.HTMLAttributes<HTMLParagraphElement>,
   VariantProps<typeof paraghraphVariants> {}

const Paragraph = React.forwardRef<HTMLParagraphElement, ParaghraphProps>(({className, size, children, ...props}, ref) => {
   return (
      <p ref={ref} {...props} className={cn(paraghraphVariants({ size, className }))}>
         {children}
      </p>
   )
})

Paragraph.displayName = 'Paragraph'

export default Paragraph;