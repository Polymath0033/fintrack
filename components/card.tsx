const Card: React.FC<{ title: string; value: string; percentage: string }> = ({
  title,
  value,
  percentage,
}) => {
  return (
    <div className="flex flex-col p-7 items-start flex-1 rounded-[20px] bg-[#34616F17] gap-[18px]  ">
      <div className="flex justify-between items-center self-stretch ">
        <h4 className="flex-1 text-[17px] font-bold -tracking-[0.085px] leading-[141.176%] text-secondary ">
          {title}
        </h4>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5 10.25C3.89543 10.25 3 11.1454 3 12.25C3 13.3546 3.89543 14.25 5 14.25C6.10457 14.25 7 13.3546 7 12.25C7 11.1454 6.10457 10.25 5 10.25ZM10 12.25C10 11.1454 10.8954 10.25 12 10.25C13.1046 10.25 14 11.1454 14 12.25C14 13.3546 13.1046 14.25 12 14.25C10.8954 14.25 10 13.3546 10 12.25ZM17 12.25C17 11.1454 17.8954 10.25 19 10.25C20.1046 10.25 21 11.1454 21 12.25C21 13.3546 20.1046 14.25 19 14.25C17.8954 14.25 17 13.3546 17 12.25Z"
              fill="#1B2528"
            />
          </svg>
        </span>
      </div>
      <div>
        <h6 className="text-[34px] font-bold -tracking-[0.68px] leading-[117.647%] text-secondary ">{value}</h6>
        <p className="text-[13px] font-medium text-[#3E7383] leading-[123.007%] ">{percentage}</p>
      </div>
    </div>
  );
};

export default Card;
