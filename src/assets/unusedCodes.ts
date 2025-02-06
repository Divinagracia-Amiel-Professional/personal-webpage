 // const slideNext = () => {
    //     if(!thumbAnim && thumbIndex < thumbs.length - 1){
    //         setThumbAnim(true)
    //         setThumbIndex(prevState => prevState + 1)
    //     }
    // }

    // const slidePrev = () => {
    //     if(!thumbAnim && thumbIndex > 0){
    //         setThumbAnim(true)
    //         setThumbIndex(prevState => prevState - 1)
    //     }
    // }

    // const syncMainBeforeChange = (e: EventObject) => {
    //     setMainAnim(true)
    // }

    // const syncMainAfterChange = (e: EventObject) => {
        
    //     setMainAnim(false)

    //     if(e.type === 'action'){
    //         setThumbIndex(e.item)
    //         setThumbAnim(false)
    //     } else {
    //         setMainIndex(thumbIndex)
    //     }
    // }

    // const syncThumbs = (e: EventObject) => {
    //     console.log(e)
    //     setThumbIndex(e.item)
    //     setThumbAnim(false)

    //     if (!mainAnim) {
    //         setMainIndex(e.item)
    //     }
    // }

    // const IconButtonStyle: SxProps = {
    //     color: buttonTextFill,
    //     "&:hover": { color: iconHoverFill }
    // }

    // const ButtonBGStyle: CSSProperties = {
    //     background: buttonFill
    // }

    // const renderPrevButton = ({ isDisabled }: { isDisabled?: boolean | undefined}) => {
    //     return (
    //         <div
    //             className="cursor-pointer"
    //             // style={ButtonBGStyle}
    //         >
    //             <ChevronLeftRounded 
    //                 sx={IconButtonStyle}
    //             />
    //         </div>
    //     );
    // };
    
    // const renderNextButton = ({ isDisabled }: { isDisabled?: boolean | undefined}) => {
    //     return (
    //         <CustomButtom 
    //             mode='icon-with-BG'
    //             text='text'
    //             iconPosition="right"
    //             showText={false}
    //             showIcon={true}
    //             bgColor={Color('red')}
    //             icon={
    //                 <ChevronRightRounded 
    //                     sx={IconButtonStyle}
    //                 />
    //             }
    //             onClick={() => {
    //                 // navigate("/")
    //             }}
    //         />
    //     );
    // };

     // useEffect(() => {
    //     setThumbs(initThumbItems({
    //         thumbIndex, 
    //         items: imgUrls,
    //         getThumbIndex,
    //         setThumbIndex,
    //         setThumbAnim
    //     }));
    // }, [thumbIndex, imgUrls]);

    // const initThumbs = initThumbItems({
    //     thumbIndex: thumbIndex,
    //     items: imgUrls,
    //     getThumbIndex: getThumbIndex, 
    //     setThumbIndex: setThumbIndex, 
    //     setThumbAnim: setThumbAnim
    // })         

    // const [ thumbs, setThumbs ] = useState<ReactElement[]>(initThumbs)
    

    // const getThumbIndex = () => { //get thumb index inside item
    //     return thumbIndex
    // }
    // const initThumbs = initThumbItems({
    //     thumbIndex, 
    //     items: imgUrls,
    //     getThumbIndex,
    //     setThumbIndex,
    //     setThumbAnim
    // })

/* 
    <AliceCarousel
        activeIndex={mainIndex}
        animationType="fadeout"
        animationDuration={400}
        disableDotsControls
        disableButtonsControls
        items={mainItems}
        mouseTracking={!thumbAnim}
        onSlideChange={syncMainBeforeChange}
        onSlideChanged={syncMainAfterChange}
        touchTracking={!thumbAnim}
    />
    <div
        className="thumbs"
        style={{
            display: 'flex',
            flexDirection: 'row',
            // maxWidth: '30vw',
            alignItems: 'center',
            alignSelf: 'stretch',
            // justifyContent: 'space-between'
        }}
    >
        <div 
            style={{
                cursor: 'pointer',
                padding: 20
            }}
            className="btn-prev" onClick={slidePrev}
        >
                &lang;
        </div>
        <AliceCarousel
            activeIndex={thumbIndex}
            autoWidth
            disableButtonsControls
            disableDotsControls
            items={thumbs}
            mouseTracking={false}
            onSlideChanged={syncThumbs}
            touchTracking={!mainAnim}
        />
        <div
            style={{
                cursor: 'pointer',
                padding: 20
            }} 
            className="btn-next" 
            onClick={slideNext}
        >
                &rang;
        </div>
    </div>  
*/
    
// type ThumbItemType = {
//     items: string[],
//     getThumbIndex: () => number,
//     setThumbIndex: React.Dispatch<React.SetStateAction<number>>,
//     setThumbAnim: React.Dispatch<React.SetStateAction<boolean>>
//     thumbIndex: number
// }

// interface ThumbItemComponentProps extends Omit<ThumbItemType, 'items'> {
//     index: number,
//     imgRef: string
// }

// const ThumbItemComponent = ({
//     getThumbIndex,
//     setThumbAnim,
//     setThumbIndex,
//     index,
//     imgRef,
//     thumbIndex
// }: ThumbItemComponentProps) => {
//     const thisItemIndex = index;

//     console.log(`thumbIndex: ${thumbIndex}`)
    
//     return(
//         <div
//             className="projects-img-container-thumb"
//             style={{
//                 border: thisItemIndex === getThumbIndex() ? '2px solid white' : 0
//             }}
//             onClick={() => (
//                 setThumbIndex(index),
//                 setThumbAnim(true)
//             )}
//         >
//             <img src={imgRef} alt={imgRef} />
//         </div>
//     )
// }

// const initThumbItems = ({items, getThumbIndex, setThumbIndex, setThumbAnim, thumbIndex}: ThumbItemType) => {
//     const carouselArray = items.map((imgRef, index) => {
//         return(
//             <ThumbItemComponent 
//                 index={index}
//                 imgRef={imgRef}
//                 getThumbIndex={getThumbIndex}
//                 setThumbIndex={setThumbIndex}
//                 setThumbAnim={setThumbAnim}
//                 thumbIndex={thumbIndex}
//             />
//         )
//     })

//     return carouselArray
// } // setter for thumbnail arr of react components

// type EventVoidFunc = (e: EventObject) => void