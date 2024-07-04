import clsx from "clsx";
import {
  TablePagination,
  TablePaginationProps,
} from "@mui/base/TablePagination";
import React from "react";

const resolveSlotProps = (fn: any, args: any) =>
  typeof fn === "function" ? fn(args) : fn;

const CustomTablePagination = React.forwardRef<
  HTMLTableCellElement,
  TablePaginationProps
>((props, ref) => {
  return (
    <TablePagination
      ref={ref}
      {...props}
      className={clsx("CustomTablePagination p-4", props.className)}
      slotProps={{
        ...props.slotProps,
        select: (ownerState) => {
          const resolvedSlotProps = resolveSlotProps(
            props.slotProps?.select,
            ownerState
          );
          return {
            ...resolvedSlotProps,
            className: clsx(
              "font-sans py-[2px] pl-[4px] pr-[2px] border-0 rounded-[6px] bg-transparent hover:bg-zinc-20 hover:dark:bg-concrete-gray focus:outline-0",
              resolvedSlotProps?.className
            ),
          };
        },
        actions: (ownerState) => {
          const resolvedSlotProps = resolveSlotProps(
            props.slotProps?.actions,
            ownerState
          );
          return {
            ...resolvedSlotProps,
            className: clsx(
              "flex gap-[6px] text-center [&>button]:my-0 [&>button]:p-0 [&>button]:flex [&>button]:items-center [&>button]:rounded-full [&>button]:bg-transparent [&>button:hover]:bg-concrete-gray [&>button:focus]:outline-0 [&>button:focus]:ring-[2px] [&>button:focus]:border-purple-400 [&>button:focus]:dark:border-purple-400 [&>button:focus:hover]:border-purple-400 [&>button:focus:hover]:dark:border-purple-400 [&>button>svg]:text-[22px] [&>button:disabled]:opacity-[0.3] [&>button:disabled:hover]:bg-transparent [&>button:disabled:hover]:border-zinc-300 [&>button:disabled:hover]:dark:border-zinc-700",
              resolvedSlotProps?.className
            ),
          };
        },
        spacer: (ownerState) => {
          const resolvedSlotProps = resolveSlotProps(
            props.slotProps?.spacer,
            ownerState
          );

          return {
            ...resolvedSlotProps,
            className: clsx("hidden", resolvedSlotProps?.className),
          };
        },
        toolbar: (ownerState) => {
          const resolvedSlotProps = resolveSlotProps(
            props.slotProps?.toolbar,
            ownerState
          );
          return {
            ...resolvedSlotProps,
            className: clsx(
              "flex flex-col items-start gap-[8px] md:flex-row md:items-center",
              resolvedSlotProps?.className
            ),
          };
        },
        selectLabel: (ownerState) => {
          const resolvedSlotProps = resolveSlotProps(
            props.slotProps?.selectLabel,
            ownerState
          );
          return {
            ...resolvedSlotProps,
            className: clsx("m-0", resolvedSlotProps?.className),
          };
        },
        displayedRows: (ownerState) => {
          const resolvedSlotProps = resolveSlotProps(
            props.slotProps?.displayedRows,
            ownerState
          );
          return {
            ...resolvedSlotProps,
            className: clsx("m-0 md:ml-auto", resolvedSlotProps?.className),
          };
        },
      }}
    />
  );
});

export default CustomTablePagination;
