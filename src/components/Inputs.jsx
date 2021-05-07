const Inputs = () => {
  return (
    <main className='inputs container'>
      <div className='inputContainer'>
        <label htmlFor=''>
          Text:
          <input type='text' />
        </label>
      </div>
      <div className='inputContainer'>
        <label htmlFor=''>
          Button:
          <input type='button' value='button' />
        </label>
      </div>
      <div className='inputContainer'>
        <label htmlFor=''>
          Date:
          <input type='date' name='' id='' />
        </label>
      </div>
      <div className='inputContainer'>
        <label htmlFor=''>
          Email:
          <input type='email' name='' id='' />
        </label>
      </div>
      <div className='inputContainer'>
        <label htmlFor=''>
          Password:
          <input type='password' name='' id='' />
        </label>
      </div>
      <div className='inputContainer'>
        <label htmlFor=''>
          Range:
          <input type='range' name='' id='' />
        </label>
      </div>
      <div className='inputContainer'>
        <label htmlFor=''>
          Search:
          <input type='search' name='' id='' />
        </label>
      </div>
      <div className='inputContainer'>
        <label htmlFor=''>
          Time:
          <input type='time' name='' id='' />
        </label>
      </div>
    </main>
  );
};

export default Inputs;
