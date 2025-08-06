const Badge: React.FC<{ status: "positive" | "negative"; title: string }> = ({
  status,
  title,
}) => {
  return (
    <div
      className="inline-flex items-center justify-center hover:border-[1.5px] hover:border-black bg-[#34616F17] text-secondary  px-2 py-1 rounded-2xl text-[15px] text-center leading-[133.333%] font-medium"
    >
        <span
            className={`inline-block w-1.5 h-1.5 rounded-full mr-1 ${
            status === "positive" ? "bg-[#087A2E]" : "bg-[#C6381B]"
            }`}
        ></span>
      {title}
    </div>
  );
};

export default Badge;
