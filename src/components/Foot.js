import React, { useEffect } from "react"

const Foot = () => {
  useEffect(() => {
    const script = document.createElement("script")

    script.src =
      "https://seal.godaddy.com/getSeal?sealID=Uwek1tGFGFSG17CiFjCKXC8AOSzQldmfbjWhrKKjIcxT0LaCIotgHcIm3fhq"
    script.async = true
    script.type = "text/javascript"

    const siteseal = document.querySelector("#siteseal")

    siteseal.appendChild(script)

    return () => {
      siteseal.removeChild(script)
    }
  }, [])

  return (
    <footer>
      <div className="wrap"></div>
      <p className="copyright">Let's move fast and break things.</p>
      <span id="siteseal"></span>
    </footer>
  )
}

export default Foot
