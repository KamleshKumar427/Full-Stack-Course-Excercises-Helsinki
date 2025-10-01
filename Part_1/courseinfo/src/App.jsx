const Header = (props) => {
  return <h1>{props.course}</h1>
}



// Ex: 1.3
const Content = (props) => {
  return (
    <>
      <Part name={props.parts.name} exercises={props.parts.exercises} />
    </>
  )
}


// Ex: 1.2
const Part = (props) => {
  return (
    <p> {props.name}  {props.exercises} </p>
  )
}

// Ex: 1.2
// const Content = (props) => {
//   return (
//     <>
//       <Part name={props.parts[0].name} exercises={props.parts[0].exercises} />
//       <Part name={props.parts[1].name} exercises={props.parts[1].exercises} />
//       <Part name={props.parts[2].name} exercises={props.parts[2].exercises} />
//     </>
//   )
// }


// Ex: 1.1
// const Content = (props) => {
//   return (
//     props.parts.map((part) =>
//     (
//       <p >{part.name} {part.exercises} </p>
//     )
//     )
//   )
// }

const Total = (props) => {

  let totalExcercises = 0

  totalExcercises = props.part1.exercises + props.part2.exercises + props.part3.exercises

  return <p>Number of exercises {totalExcercises}</p>
}

const App = () => {
  // const course = 'Half Stack application development'
  // const parts = [
  //   { name: 'Fundamentals of React', exercises: 10 },
  //   { name: 'Using props to pass data', exercises: 7 },
  //   { name: 'State of a component', exercises: 14 }
  // ]

  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={part1} />
      <Content parts={part2} />
      <Content parts={part3} />
      <Total part1={part1} part2 = { part2} part3= {part3}  />
    </div>
  )
}

export default App;
