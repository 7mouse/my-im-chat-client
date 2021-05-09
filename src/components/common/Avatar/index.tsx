type props = {
  size?: number,
  isRound?: boolean
}

const Avatar = ({
  size=36,
  isRound=true
}:props) => {
  let outerDiv = `flex justify-center items-center text-gray-50 cursor-pointer ${isRound === true ? "rounded-md " : "" }`;
  return (
    <div className={outerDiv}>
      <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1148" xmlnsXlink="http://www.w3.org/1999/xlink" width={size} height={size}><defs><style type="text/css"></style></defs><path d="M512 62.08A449.92 449.92 0 1 0 961.92 512 449.92 449.92 0 0 0 512 62.08z m0 135.04a135.04 135.04 0 1 1-135.04 135.04A134.72 134.72 0 0 1 512 197.12z m0 640a323.84 323.84 0 0 1-269.76-144.96c0-89.6 179.84-138.56 269.76-138.56s268.48 48.96 269.76 138.56A323.84 323.84 0 0 1 512 835.84z" p-id="1149" fill="#ffffff"></path></svg>
    </div>
  )
};

export default Avatar;