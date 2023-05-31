import { useSelector } from "react-redux"

const Loader = () => {
  const display = useSelector((state) => state.loader);
  console.log(display)
  return (
    <div className="loader-container" style={{ display: display }}>
        <div className="lds-spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
  )
}

export default Loader