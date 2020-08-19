import GenericService from "./GenericService";
class GuideService extends GenericService {
  constructor() {
    super();
  }
  addGuide = (data) => this.post("travelguides", data);

  deleteGuide = (_id) => this.delete("travelguides/" + _id);

  updateGuide = (_id, data) => this.put("travelguides/" + _id, data);

  getGuides = () => this.get("travelguides");
  getSingleGuide = (id) => this.get("travelguides/" + id);
}
let guideService = new GuideService();
export default guideService;
