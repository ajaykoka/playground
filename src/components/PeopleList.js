import React, { useState } from 'react';

const peopleData = [
  { id: 1, name: 'John Doe', image: 'john.jpg' },
  { id: 2, name: 'Jane Smith', image: 'jane.jpg' },
  { id: 3, name: 'Alice Johnson', image: 'alice.jpg' },
  // Add more people data as needed
];

const PeopleList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPeople, setFilteredPeople] = useState(peopleData);

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);

    const filteredPeople = peopleData.filter((person) =>
      person.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPeople(filteredPeople);
  };

  const handleClick = (person) => {
    console.log('Person details:', person);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
        style={{
          padding: '10px',
          margin: '10px',
          fontFamily: 'Roboto',
        }}
      />
      <ul>
        {filteredPeople.map((person) => (
          <li
            key={person.id}
            onClick={() => handleClick(person)}
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '10px',
              margin: '10px',
              fontFamily: 'Roboto',
              cursor: 'pointer',
              border: '1px solid #ccc',
              borderRadius: '5px',
              transition: 'background-color 0.3s ease',
              backgroundColor: '#fff',
            }}
          >
            <img
              src={person.image}
              alt={person.name}
              style={{ width: '50px', marginRight: '10px' }}
            />
            <span>{person.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PeopleList;