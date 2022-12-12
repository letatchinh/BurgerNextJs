
export default function PieceBurger({background,width,borderRadius , height,text}) {
  return (
    <div style={{background : background , width : width ? width : '100%',borderRadius :borderRadius,height:height ? height : '50px',textAlign : 'center' }}>
    {text}
    </div>
  )
}
