const FooterPolicyLinks = () => {
  return (
    <div className="flex flex-col items-start md:items-end text-[12px] md:text-[10px] mt-2">
      <ul className="flex gap-4">
        <li>Advertise</li>
        <li>AdChoices</li>
        <li>Privacy Notice</li>
        <li>Visitor Agreement</li>
      </ul>
      <ul className="flex flex-col mt-2 md:mt-0 md:flex-row gap-1 md:gap-4">
        <li>California Privacy Notice</li>
        <li>Do not Sell or Share My Personal Information</li>
      </ul>
    </div>
  );
};

export default FooterPolicyLinks;
