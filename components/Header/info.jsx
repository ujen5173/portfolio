const InfoHeader = () => {
  return (
    <div className="w-full h-fit py-2 bg-black">
      <p className="text-sm mx-auto text-center tracking-wider font-medium w-10/12 text-gray-200">
        Design Inspiration:
        <a
          href="https://danspratling.dev/"
          target="_blank"
          rel="noreferrer"
          className="mx-2 hover:underline text-primary"
        >
          Dan Spratling
        </a>
      </p>
    </div>
  );
};

export default InfoHeader;
