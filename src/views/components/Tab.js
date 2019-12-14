import React, {useState, useEffect, useRef} from 'react';
import _ from 'lodash'
import cn from 'classnames'

function Tab(props) {
    const {
//store에 안 꽂고, 데이터 fetch해온 데에서 배열로 concat묶어서 [photo,collection,users]로 가져오면 될듯,, 다른곳도 그렇게 받아오게,, 이름상관없이 배열형으로
        heads = [
            {
                icon: 'insert_photo',
                txt: 'Photos',
                val: '45643', //10만 100k
                id: '', // api or id
            },
            {
                icon: 'layers',
                txt: 'Collections',
                val: '32',
                id: '',
            },
            {
                icon: 'group',
                txt: 'Users',
                val: '100',
                id: '',
            },
        ],
        contents = [
            [{
                id: 111,
            },
            ],
            [{
                id: 2,
            }],
            [{
                id: 3,
            }]
        ]
    } = props;

    //데이터 json 구조가 동일하다고 치면 store에 이름에 구애받지않고 쓰기위해서
    //이 컴포넌트에서 let item = ... 이걸로 다시 받아서 써도되나? 이렇게 쓰나?
    //일단 공용은 나중에 생각하자..


    const [currentHead, setCurrentHead] = useState(0);
    const headsRef = useRef();//함수형 컴포넌트 초기값 설정 어떻게해줘야하지
    const contentsRef = useRef();//함수형 컴포넌트 초기값 설정 어떻게해줘야하지
    const toggleClass = (idx) => {
        //이걸 초기값으로 넣어줘야해,,
        for (let i = 0; i < headsRef.current.children.length; i++) {
            headsRef.current.children[i].classList.remove('is-active');
            headsRef.current.children[idx].classList.add('is-active');
        }
    };

    console.log("@@ currentHead", currentHead);
    console.log("@@ contentsRef", contentsRef);

    // const myRef = React.createRef(); // 함수 컴포넌트 안되고 클래스컴포에서만 사용된다던

    return (
        <div className="Tab">
            <div className="head-wrap" ref={headsRef}>
                {
                    _.map(heads, (head, i) =>
                        <div className={cn("head", (i === 0 && 'is-active'))}
                             key={i} //key도 셀렉이 되나?
                            // data-href={i}
                             onClick={() => {
                                 toggleClass(i, head.id); //초기값을 i로 주는 게 맞나,,, children[0] 이런거 없나..
                                 //map으로 출력된 애는 조작하기에는 반은 static한 데이터 인거 맞지?
                                 setCurrentHead(i);
                             }}
                        >
                            <div className="txt">
                                <i className="material-icons">{head.icon}</i>
                                {head.txt} {abbrNum(parseInt(head.val))}</div>
                        </div>
                    )
                }
            </div>
            <div className="cont-wrap" ref={contentsRef}>
                {
                    _.map(contents, (content, i) =>
                        <div
                            className={cn("cont", {'is-active': (currentHead === i)})}
                            //, {'is-active': (currentHead == contentsRef.current.children[i].dataset.href)}
                            key={i}
                            >
                            {content[0].id}
                        </div>
                    )
                }
            </div>
        </div>
    )
}

function abbrNum(number, decPlaces = 1) {
    // 2 decimal places => 100, 3 => 1000, etc
    decPlaces = Math.pow(10, decPlaces);

    // Enumerate number abbreviations
    var abbrev = ["k", "m", "b", "t"];

    // Go through the array backwards, so we do the largest first
    for (var i = abbrev.length - 1; i >= 0; i--) {

        // Convert array index to "1000", "1000000", etc
        var size = Math.pow(10, (i + 1) * 3);

        // If the number is bigger or equal do the abbreviation
        if (size <= number) {
            // Here, we multiply by decPlaces, round, and then divide by decPlaces.
            // This gives us nice rounding to a particular decimal place.
            number = Math.round(number * decPlaces / size) / decPlaces;

            // Handle special case where we round up to the next abbreviation
            if ((number == 1000) && (i < abbrev.length - 1)) {
                number = 1;
                i++;
            }

            // Add the letter for the abbreviation
            number += abbrev[i];

            // We are done... stop
            break;
        }
    }
    return number;
}

export default Tab;