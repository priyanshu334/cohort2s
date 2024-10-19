type EventType = 'click'|'scroll'|'mousehover'
type ExcludeEvent = Exclude<EventType, 'scroll'>
//excludes 'scrool' from type 
const handleEvent = (event:ExcludeEvent)=>{
    console.log(`Handling an event ${event}`)
}
