import { cn } from '@/lib/cn';

export const Search = ({
  className,
  ...props
}: React.ComponentProps<'svg'>) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('h-8 w-8', className)}
      {...props}
    >
      <path
        d="M19.894 21.1424L13.2831 14.5375C12.7871 14.9585 12.2071 15.287 11.5431 15.5229C10.8791 15.7587 10.1695 15.8766 9.41411 15.8766C7.58353 15.8766 6.03395 15.2416 4.76536 13.9717C3.49678 12.7018 2.86249 11.1695 2.86249 9.37498C2.86249 7.58041 3.49745 6.04816 4.76739 4.77823C6.0373 3.50831 7.57371 2.87335 9.37661 2.87335C11.1795 2.87335 12.7118 3.50831 13.9734 4.77823C15.2349 6.04816 15.8657 7.58166 15.8657 9.37873C15.8657 10.1009 15.7521 10.7923 15.5247 11.453C15.2974 12.1137 14.9563 12.7337 14.5016 13.313L21.1375 19.8989L19.894 21.1424ZM9.39124 14.1734C10.7201 14.1734 11.8475 13.7046 12.7735 12.7672C13.6995 11.8298 14.1625 10.6991 14.1625 9.37498C14.1625 8.05088 13.6992 6.92013 12.7726 5.98273C11.846 5.04531 10.7189 4.5766 9.39124 4.5766C8.04967 4.5766 6.91003 5.04531 5.97231 5.98273C5.0346 6.92013 4.56574 8.05088 4.56574 9.37498C4.56574 10.6991 5.0343 11.8298 5.97144 12.7672C6.90855 13.7046 8.04849 14.1734 9.39124 14.1734Z"
        fill="currentColor"
      />
    </svg>
  );
};