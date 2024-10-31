import { cn } from '@/lib/cn';

export const EyeSlashIcon = ({
  className,
  ...props
}: React.ComponentProps<'svg'>) => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="currentColor"
      className={cn('h-8 w-8', className)}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.12965 5.31527C3.78911 4.97473 3.78911 4.42261 4.12965 4.08207C4.47019 3.74153 5.02232 3.74153 5.36285 4.08207L23.9657 22.6849C24.3062 23.0254 24.3062 23.5776 23.9657 23.9181C23.6251 24.2586 23.073 24.2586 22.7325 23.9181L19.4459 20.6315C17.8074 21.5236 15.9778 22.1388 14.0477 22.1388C9.61145 22.1388 5.70603 18.8887 3.43208 16.4962C2.08384 15.0777 2.08384 12.9225 3.43209 11.5039C4.3969 10.4888 5.65541 9.31931 7.12356 8.30918L4.12965 5.31527ZM11.0426 12.2282C10.7357 12.7475 10.5596 13.3532 10.5596 14.0001C10.5596 15.9265 12.1213 17.4881 14.0477 17.4881C14.6945 17.4881 15.3003 17.312 15.8196 17.0052L11.0426 12.2282ZM14.0477 5.86134C18.4839 5.86134 22.3893 9.11141 24.6632 11.5039C26.0115 12.9225 26.0115 15.0777 24.6632 16.4962C24.1516 17.0346 23.5573 17.6163 22.893 18.1947L11.0395 6.34111C12.0039 6.03872 13.0113 5.86134 14.0477 5.86134Z"
        fill="currentColor"
      />
    </svg>
  );
};