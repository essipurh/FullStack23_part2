const Header = ({ course }) => <h2>{course}</h2>

const Part = ({ name, exercises }) => <p>{name} {exercises}</p>

const Content = ({ parts }) => {
    return (
      <div>
        {parts.map(part => 
        <Part key={part.id} name={part.name} exercises={part.exercises} />
    )}
      </div>
    )
  }

const Total = ({ sum }) => <p style={{"font-weight": "bold"}}>Total of exercises {sum} </p>

const Course = ({ course }) => {
    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total sum={course.parts.reduce((total, part) => total + part.exercises, 0)} />
        </div>
    )
  }
  
  export default Course