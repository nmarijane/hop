import { Type } from './type';
import { Geometry } from './geometry';
import { Photo } from './photo';
import { Opening } from './open';

export class PlaceSearch {
    name: string;
    vicinity: string;
    type: Type[];
    geometry: Geometry;
    icon : string;
    place_id: string;
    scope: string;
    reference: string;
    id: string;
    opening_hours: Opening;
    opennow: string;
    photo: Photo;

}
/*
<?xml version="1.0" encoding="UTF-8"?>
<PlaceSearchResponse>
 <status>OK</status>
 <result>
  <icon>http://maps.gstatic.com/mapfiles/place_api/icons/travel_agent-71.png</icon>
  <place_id>ChIJyWEHuEmuEmsRm9hTkapTCrk</place_id>
  <scope>GOOGLE</scope>
  <alt_ids>
   <place_id>D9iJyWEHuEmuEmsRm9hTkapTCrk</place_id>
   <scope>APP</scope>
  </alt_ids>
  <reference>CoQBdAAAAChhtoQX_467esHavS0Sj9DrY306W3_uDXKmB2us8Eh7_dX7rDuln18i_uqocF_LmzRptuFr6WZs7aeBSLFq8VFmckxFjsXDaqMdd3gvxi_5dIwPTEugQQYG9oJA-YnYfPBvjGtuoMfNnjyU2GuxGRmJjCO77pEAbsTLq44eBG5jEhAvkKHCGqIzqgC9tdOb1dSqGhRA1hhG4pvILD5OEAq6W8L8sXbkug</reference>
  <id>21a0b251c9b8392186142c798263e289fe45b4aa</id>
  <opening_hours>
   <open_now>true</open_now>
  </opening_hours>
  <photo>
   <photo_reference>CnRnAAAAiRA8ls6lx5LTfLuHJtLYvz73LXIMa5EVsHz2OUjh70LBPBnIEULZ57w076gOuyCeJqP041_v-ek3I5C4IkqW7YgA0EBybwywfIcUXsj5W_qiJR2yaXHXI-FmDM6j1zaS0sJQnNJhe4Bl9W42Jx16phIQRmNOWKGIemKLgzNEPcCnmBoUGgr0gWQBwWd8HAseR-5ie3JYuIM</photo_reference>
   <width>519</width>
   <height>270</height>
  </photo>
 </result>
</PlaceSearchResponse>*/
