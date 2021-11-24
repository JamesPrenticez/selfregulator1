import { useState } from "react"
import { ChevronLeftIcon, ChevronDownIcon } from "@heroicons/react/outline";

function Chevron() {
    const [state, setChevron] = useState(false)
    return (
      <div>
        {state ? (
          <ChevronDownIcon
            className="navBtn"
            onClick={() => setChevron(!state)}
          />
        ) : (
          <ChevronLeftIcon
            className="navBtn"
            onClick={() => setChevron(!state)}
          />
        )}
      </div>
    );
}

export default Chevron
