import { FC } from "react";
import { cn } from "../../lib/utils";
import { cva, VariantProps } from 'class-variance-authority';

const headingVariants = cva(
   'text-black font-semibold -tracking-[0.02rem] uppercase', {
      variants: {
         size: {
            display: 'text-4xl md:text-9xl font-bold',
            h1: 'text-6xl',
            h2: 'text-5xl lg:text-6xl',
            h3: 'text-3xl'
         }
      },
      defaultVariants: {
         size: 'h3'
      }
   }
)

interface HeadingProps
   extends React.HTMLAttributes<HTMLHeadingElement>,
   VariantProps<typeof headingVariants>{}

const Heading: FC<HeadingProps> = ({
   children,
   className,
   size,
   ...props
}) => {

   return (
      <h1 {...props} className={cn(headingVariants({size, className}))}>
         {children}
      </h1>
   )


}

export default Heading;