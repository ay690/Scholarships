import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const ScholarshipSearch = () => {
  const [scholarships, setScholarships] = useState([]);
  const [caste, setCaste] = useState('');
  const [religion, setReligion] = useState('');
  const [aiFeedback, setAIFeedback] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const res = await axios.post(
        'http://localhost:5001/api/scholarships/search',
        { caste, religion },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      console.log("API Response:", res.data);
      setScholarships(res.data?.data);
 
      setAIFeedback(res.data?.aiFeedback);
     
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <motion.div
      className="page-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Scholarship Search</h2>
      <form onSubmit={handleSearch} style={{ marginBottom: '20px', textAlign: 'center' }}>
        <input
          type="text"
          placeholder="Caste"
          value={caste}
          onChange={(e) => setCaste(e.target.value)}
          style={{ marginRight: '10px', padding: '8px', width: '40%' }}
        />
        <input
          type="text"
          placeholder="Religion"
          value={religion}
          onChange={(e) => setReligion(e.target.value)}
          style={{ marginRight: '10px', padding: '8px', width: '40%' }}
        />
        <button type="submit" style={{ padding: '10px 20px' }}>Search</button>
      </form>
      <div>
        <h3 style={{ marginBottom: '10px' }}>Results</h3>
        {scholarships?.map((sch, index) => (
          <div key={index} className="scholarship-item">
            <h4>{sch.name}</h4>
            <p>{sch.description}</p>
            <p><strong>Eligible Castes:</strong> {sch.eligibleCastes?.join(', ') || "Anyone"}</p>
            <p><strong>Eligible Religions:</strong> {sch.eligibleReligions?.join(', ') || "Anyone"}</p>
            <p><strong>Institution Type:</strong> {sch.institutionType.charAt(0).toUpperCase() + sch.institutionType.slice(1)}</p>
          </div>
        ))}
        {aiFeedback && (
          <div className="ai-feedback">
            <p><strong>AI Feedback:</strong> {aiFeedback}</p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ScholarshipSearch;
