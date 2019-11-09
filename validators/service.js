const availableServices = ['twitter', 'instagram'];

const getValidServices = (services) => {
  const validServices = [];

  services.forEach(service => {
    const serviceToValidate = service.name.toLowerCase().trim();
    // if service is available and is not already subscribed
    if (availableServices.indexOf(serviceToValidate) !== -1
          && validServices.indexOf(serviceToValidate) === -1) {
      validServices.push(service);
    }
  });
  return validServices;
};

module.exports = getValidServices;
