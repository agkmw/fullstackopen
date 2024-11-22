import axios from "axios";

const baseUrl = "/api/persons";

const data = (request) => {
  return request.then((response) => response.data);
};

const getAll = () => {
  const request = axios.get(baseUrl);
  return data(request);
};

const create = (person) => {
  const request = axios.post(baseUrl, person);
  return data(request);
};

const update = (person) => {
  const request = axios.put(`${baseUrl}/${person.id}`, person);
  return data(request);
};

const destroy = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return data(request);
};

export default { getAll, create, update, destroy };
