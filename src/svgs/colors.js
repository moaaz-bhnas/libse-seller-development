import { memo } from 'react'

function SvgColors(props) {
  return (
    <svg className="svg colorsSvg" viewBox="-22 -21 682 682.667" {...props}>
      <path d="M424.352 301.25H639.23c-6.007-103.922-61.597-194.531-143.476-248.54L388.3 238.825c18.531 15.66 31.613 37.54 36.05 62.426zm0 0M251.262 238.824L143.809 52.711C61.934 106.719 6.339 197.328.332 301.25h214.883c4.433-24.887 17.515-46.766 36.047-62.426zm0 0M319.781 213.75c12.66 0 24.801 2.227 36.067 6.29L463.293 33.93C420.133 12.23 371.387 0 319.781 0S219.434 12.23 176.27 33.93l107.453 186.11a106.028 106.028 0 0136.058-6.29zm0 0M388.3 401.176l107.454 186.113c81.879-54.008 137.469-144.617 143.476-248.539H424.352c-4.438 24.887-17.52 46.766-36.051 62.426zm0 0M319.781 426.25c-12.66 0-24.8-2.227-36.058-6.29L176.266 606.07C219.434 627.773 268.176 640 319.78 640s100.352-12.227 143.516-33.93l-107.45-186.11a106.106 106.106 0 01-36.066 6.29zm0 0M215.215 338.75H.332C6.34 442.672 61.934 533.281 143.809 587.29l107.453-186.114c-18.532-15.66-31.614-37.54-36.047-62.426zm0 0" />
    </svg>
  );
}

export default memo(SvgColors);