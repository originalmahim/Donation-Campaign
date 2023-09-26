    const getDonation = () =>{
          const storedDonations = localStorage.getItem('Donations');
          if(storedDonations){
          return JSON.parse(storedDonations);
          }
          return [];
      }
      
      
      const saveDonations = id =>{
          const storedDonation = getDonation();
          const exists = storedDonation.find(jobId => jobId === id);
          if(!exists){
          storedDonation.push(id);
          localStorage.setItem( 'Donations' , JSON.stringify(storedDonation))
          }
      }
      
      export { getDonation, saveDonations}