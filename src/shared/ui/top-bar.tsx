type TopBarProps = {
  phone: string;
  storeHref?: string;
  trackOrderHref?: string;
};

export function TopBar({
  phone,
  storeHref = "#",
  trackOrderHref = "#",
}: TopBarProps) {
  return (
    <div className="border-b border-default-200 bg-white  ">
      <div className=" flex h-12  min-w-full max-w-7xl items-center  justify-around px-4 lg:px-8">
        <span>Need help? Call us: {phone}</span>

        <div className="flex items-center gap-8">
          <a
            href={storeHref}
            className="transition hover:opacity-80"
          >
            Our store
          </a>
          <a
            href={trackOrderHref}
            className="transition hover:opacity-80"
          >
            Track your order
          </a>
        </div>
      </div>
    </div>
  );
}
