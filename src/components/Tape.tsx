import { Fragment } from "react";
const words = [
  "https://dealcraftadvisors.com/images/DCA-Text-Logo.png",
  "https://images.squarespace-cdn.com/content/v1/628651873d261211ef8ce53a/9dcb60e8-d66e-4a58-9013-84926bedb1e5/Screenshot+2023-12-15+at+12.32.49+PM.png?format=1500w",
  "https://www.pughselfprotection.com/wp-content/uploads/2021/10/Pugh-Self-Protection-Logo_Logo-H.svg",
  "https://globalsiteselectors.com/wp-content/uploads/2024/03/0f7e77d51931150e38fd1876dd2efc0e.png",
  "https://static.wixstatic.com/media/587e5c_c15f0dc27c8b4955afebc70d4fd2b9a8~mv2.jpg/v1/fill/w_620,h_184,al_c,lg_1,q_80,enc_avif,quality_auto/Parikhal%20logo.jpg",
  "	https://www.mediagarcia.com/hs-fs/hubfs/mg-favicon-1.png?width=256&height=256&name=mg-favicon-1.png",
  "https://iterumconnections.com/wp-content/uploads/2023/03/logo-iterum-1.svg",
  "https://techinatux.com/wp-content/uploads/2024/07/sticker-design-main-latest-qfiu2zq9yc97i9w2qm5setfsujyp01iar03ump5d20.png",
  // "	https://joinrightmatch.com/nav-logo-light.svg",
  "https://www.pughselfprotection.com/wp-content/uploads/2021/10/Pugh-Self-Protection-Logo_Logo-H.svg",
];
const Tape = () => {
  return (
    <div className=" ">
      <div className="py-2 overflow-x-clip">
        <div className="-mx-1">
          <div className="flex [mask-image:linear-gradient(to_right,transparent,black_20%,black_90%,transparent)]">
            <div className="flex flex-none gap-4 py-2 animate-move-left [animation-duration:30s]">
              {[...new Array(9)].fill(0).map((_, idx) => (
                <Fragment key={idx}>
                  {words.map((word, i) => (
                    <div key={word} className="flex items-center gap-13">
                      <img
                        src={words[i % words.length]}
                        alt={`Company ${word}`}
                        className="w-36 h-36 object-contain mx-8"
                      />
                    </div>
                  ))}
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tape;
