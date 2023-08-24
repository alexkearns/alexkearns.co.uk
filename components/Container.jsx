import clsx from 'clsx'

export const Container = (
  { children, className }
) => (
  <div className={clsx("mx-auto max-w-7xl sm:px-8 lg:px-8", className)}>
    <div className={"relative px-4 sm:px-8 lg:px-12 mx-auto max-w-2xl lg:max-w-5xl"}>
      {children}
    </div>
  </div>
)
