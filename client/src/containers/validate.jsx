const validate = (input) => {
    const error = {}

    if (!input.name) {
        error.name = 'You must complete this field';
      } else if (!/^[a-zA-Z\s]+$/.test(input.name)) {
        error.name = 'Only letters allowed';
      } else if (input.name.length < 3 ) {
        error.name = 'Name too short'
      }

    const errorNum = [
      'height',
      'weight',
      'life',

    ]

    errorNum.forEach((value) => {
      if (input[value] === '' || isNaN(input[value])) {
        error[value] = `${value} is required`
      }
      
      if(input[value] > 100 || input[value] < 0) {
          error[value] = `${value} can not be less than 0 or more than 100`
        
      }
    })

    
    return error
}

export default validate