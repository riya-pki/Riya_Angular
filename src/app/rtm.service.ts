import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RtmService {

  constructor(private http: HttpClient) { }

  add(addreportbody) {
    var header = {
      headers: new HttpHeaders()
      .set('Content-Type' , 'application/json')
      .set('accept'       ,' */*',)
      .set('Authorization',  'Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoicml5YS5qYWluQHBlcmtpbmVsbWVyLmNvbSIsIlVzZXJTdWJNb2R1bGVSb2xlcyI6IkNyZWF0ZSBDYXNlLFZpZXcgQ2FzZSxFZGl0IENhc2UsRGVsZXRlIENhc2UsRWRpdCBGaWx0ZXJzLFZpZXcgUmVwb3J0LEVkaXQgUmVwb3J0LFJlbGVhc2UgUmVwb3J0LE1hbmFnZSBGaWxlIFVwbG9hZHMtRnVsbCBQZXJtaXNzaW9uLEN1cmF0ZSBHZW5lcyxDdXJhdGUgVmFyaWFudHMsVmlldyBLQixNYW5hZ2UgQXNzYXlzLUZ1bGwgUGVybWlzc2lvbixNYW5hZ2UgUmVwb3J0aW5nIFRlbXBsYXRlLE1hbmFnZSBWYXJpYW50IEludGVycHJldGF0aW9uIFRlbXBsYXRlLE1hbmFnZSBDbGllbnRzLUZ1bGwgUGVybWlzc2lvbixNYW5hZ2UgUm9sZXMtRnVsbCBQZXJtaXNzaW9uLE1hbmFnZSBVc2Vycy1GdWxsIFBlcm1pc3Npb24sTWFuYWdlIEF1ZGl0IFJlcG9ydHMtRnVsbCBQZXJtaXNzaW9uIiwiZXhwIjoxNjkxNDk5MDQ4fQ.pBrccUSy_L2IivX_aMdPvgJ-tNZ19Pfy22cHpRmfaoBY2CBcqldIvlQCEWfyolayxJKrB3uWsx1CVVUPoptX4w')
    }
    
     return this.http.post('http://localhost:7174/odinapi/ReprtTemplates/AddReportTemplate', addreportbody, header)
}

addDetails(addDetailsbody){
  var header = {
    headers: new HttpHeaders()
    .set('Content-Type' , 'application/json')
    .set('accept'       ,' */*',)
    .set('Authorization',  'Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoicml5YS5qYWluQHBlcmtpbmVsbWVyLmNvbSIsIlVzZXJTdWJNb2R1bGVSb2xlcyI6IkNyZWF0ZSBDYXNlLFZpZXcgQ2FzZSxFZGl0IENhc2UsRGVsZXRlIENhc2UsRWRpdCBGaWx0ZXJzLFZpZXcgUmVwb3J0LEVkaXQgUmVwb3J0LFJlbGVhc2UgUmVwb3J0LE1hbmFnZSBGaWxlIFVwbG9hZHMtRnVsbCBQZXJtaXNzaW9uLEN1cmF0ZSBHZW5lcyxDdXJhdGUgVmFyaWFudHMsVmlldyBLQixNYW5hZ2UgQXNzYXlzLUZ1bGwgUGVybWlzc2lvbixNYW5hZ2UgUmVwb3J0aW5nIFRlbXBsYXRlLE1hbmFnZSBWYXJpYW50IEludGVycHJldGF0aW9uIFRlbXBsYXRlLE1hbmFnZSBDbGllbnRzLUZ1bGwgUGVybWlzc2lvbixNYW5hZ2UgUm9sZXMtRnVsbCBQZXJtaXNzaW9uLE1hbmFnZSBVc2Vycy1GdWxsIFBlcm1pc3Npb24sTWFuYWdlIEF1ZGl0IFJlcG9ydHMtRnVsbCBQZXJtaXNzaW9uIiwiZXhwIjoxNjkxNDk5MDQ4fQ.pBrccUSy_L2IivX_aMdPvgJ-tNZ19Pfy22cHpRmfaoBY2CBcqldIvlQCEWfyolayxJKrB3uWsx1CVVUPoptX4w')
  }

  return this.http.post('http://localhost:7174/odinapi/ReprtTemplates/Addrtm_pd_sd_cd', addDetailsbody, header);
}

addTitle(addTitlebody){
  var header = {
    headers: new HttpHeaders()
    .set('Content-Type' , 'application/json')
    .set('accept'       ,' */*',)
    .set('Authorization',  'Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoicml5YS5qYWluQHBlcmtpbmVsbWVyLmNvbSIsIlVzZXJTdWJNb2R1bGVSb2xlcyI6IkNyZWF0ZSBDYXNlLFZpZXcgQ2FzZSxFZGl0IENhc2UsRGVsZXRlIENhc2UsRWRpdCBGaWx0ZXJzLFZpZXcgUmVwb3J0LEVkaXQgUmVwb3J0LFJlbGVhc2UgUmVwb3J0LE1hbmFnZSBGaWxlIFVwbG9hZHMtRnVsbCBQZXJtaXNzaW9uLEN1cmF0ZSBHZW5lcyxDdXJhdGUgVmFyaWFudHMsVmlldyBLQixNYW5hZ2UgQXNzYXlzLUZ1bGwgUGVybWlzc2lvbixNYW5hZ2UgUmVwb3J0aW5nIFRlbXBsYXRlLE1hbmFnZSBWYXJpYW50IEludGVycHJldGF0aW9uIFRlbXBsYXRlLE1hbmFnZSBDbGllbnRzLUZ1bGwgUGVybWlzc2lvbixNYW5hZ2UgUm9sZXMtRnVsbCBQZXJtaXNzaW9uLE1hbmFnZSBVc2Vycy1GdWxsIFBlcm1pc3Npb24sTWFuYWdlIEF1ZGl0IFJlcG9ydHMtRnVsbCBQZXJtaXNzaW9uIiwiZXhwIjoxNjkxNDk5MDQ4fQ.pBrccUSy_L2IivX_aMdPvgJ-tNZ19Pfy22cHpRmfaoBY2CBcqldIvlQCEWfyolayxJKrB3uWsx1CVVUPoptX4w')
  }

  return this.http.post('http://localhost:7174/odinapi/ReprtTemplates/Addrtm_title_tp_rfr_note_gen_ml_fi_footer', addTitlebody, header);
}

addRSSnv(addRSSnvbody){
  var header = {
    headers: new HttpHeaders()
    .set('Content-Type' , 'application/json')
    .set('accept'       ,' */*',)
    .set('Authorization',  'Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoicml5YS5qYWluQHBlcmtpbmVsbWVyLmNvbSIsIlVzZXJTdWJNb2R1bGVSb2xlcyI6IkNyZWF0ZSBDYXNlLFZpZXcgQ2FzZSxFZGl0IENhc2UsRGVsZXRlIENhc2UsRWRpdCBGaWx0ZXJzLFZpZXcgUmVwb3J0LEVkaXQgUmVwb3J0LFJlbGVhc2UgUmVwb3J0LE1hbmFnZSBGaWxlIFVwbG9hZHMtRnVsbCBQZXJtaXNzaW9uLEN1cmF0ZSBHZW5lcyxDdXJhdGUgVmFyaWFudHMsVmlldyBLQixNYW5hZ2UgQXNzYXlzLUZ1bGwgUGVybWlzc2lvbixNYW5hZ2UgUmVwb3J0aW5nIFRlbXBsYXRlLE1hbmFnZSBWYXJpYW50IEludGVycHJldGF0aW9uIFRlbXBsYXRlLE1hbmFnZSBDbGllbnRzLUZ1bGwgUGVybWlzc2lvbixNYW5hZ2UgUm9sZXMtRnVsbCBQZXJtaXNzaW9uLE1hbmFnZSBVc2Vycy1GdWxsIFBlcm1pc3Npb24sTWFuYWdlIEF1ZGl0IFJlcG9ydHMtRnVsbCBQZXJtaXNzaW9uIiwiZXhwIjoxNjkxNDk5MDQ4fQ.pBrccUSy_L2IivX_aMdPvgJ-tNZ19Pfy22cHpRmfaoBY2CBcqldIvlQCEWfyolayxJKrB3uWsx1CVVUPoptX4w')
  }

  return this.http.post('http://localhost:7174/odinapi/ReprtTemplates/Addrtm_summary_snv', addRSSnvbody, header);
}

addRSCnv(addRSCnvbody){
  var header = {
    headers: new HttpHeaders()
    .set('Content-Type' , 'application/json')
    .set('accept'       ,' */*',)
    .set('Authorization',  'Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoicml5YS5qYWluQHBlcmtpbmVsbWVyLmNvbSIsIlVzZXJTdWJNb2R1bGVSb2xlcyI6IkNyZWF0ZSBDYXNlLFZpZXcgQ2FzZSxFZGl0IENhc2UsRGVsZXRlIENhc2UsRWRpdCBGaWx0ZXJzLFZpZXcgUmVwb3J0LEVkaXQgUmVwb3J0LFJlbGVhc2UgUmVwb3J0LE1hbmFnZSBGaWxlIFVwbG9hZHMtRnVsbCBQZXJtaXNzaW9uLEN1cmF0ZSBHZW5lcyxDdXJhdGUgVmFyaWFudHMsVmlldyBLQixNYW5hZ2UgQXNzYXlzLUZ1bGwgUGVybWlzc2lvbixNYW5hZ2UgUmVwb3J0aW5nIFRlbXBsYXRlLE1hbmFnZSBWYXJpYW50IEludGVycHJldGF0aW9uIFRlbXBsYXRlLE1hbmFnZSBDbGllbnRzLUZ1bGwgUGVybWlzc2lvbixNYW5hZ2UgUm9sZXMtRnVsbCBQZXJtaXNzaW9uLE1hbmFnZSBVc2Vycy1GdWxsIFBlcm1pc3Npb24sTWFuYWdlIEF1ZGl0IFJlcG9ydHMtRnVsbCBQZXJtaXNzaW9uIiwiZXhwIjoxNjkxNDk5MDQ4fQ.pBrccUSy_L2IivX_aMdPvgJ-tNZ19Pfy22cHpRmfaoBY2CBcqldIvlQCEWfyolayxJKrB3uWsx1CVVUPoptX4w')
  }

  return this.http.post('http://localhost:7174/odinapi/ReprtTemplates/Addrtm_summary_cnv_phenotypes', addRSCnvbody, header);
}

addDf_pgd(addDf_pgdbody){
  var header = {
    headers: new HttpHeaders()
    .set('Content-Type' , 'application/json')
    .set('accept'       ,' */*',)
    .set('Authorization',  'Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoicml5YS5qYWluQHBlcmtpbmVsbWVyLmNvbSIsIlVzZXJTdWJNb2R1bGVSb2xlcyI6IkNyZWF0ZSBDYXNlLFZpZXcgQ2FzZSxFZGl0IENhc2UsRGVsZXRlIENhc2UsRWRpdCBGaWx0ZXJzLFZpZXcgUmVwb3J0LEVkaXQgUmVwb3J0LFJlbGVhc2UgUmVwb3J0LE1hbmFnZSBGaWxlIFVwbG9hZHMtRnVsbCBQZXJtaXNzaW9uLEN1cmF0ZSBHZW5lcyxDdXJhdGUgVmFyaWFudHMsVmlldyBLQixNYW5hZ2UgQXNzYXlzLUZ1bGwgUGVybWlzc2lvbixNYW5hZ2UgUmVwb3J0aW5nIFRlbXBsYXRlLE1hbmFnZSBWYXJpYW50IEludGVycHJldGF0aW9uIFRlbXBsYXRlLE1hbmFnZSBDbGllbnRzLUZ1bGwgUGVybWlzc2lvbixNYW5hZ2UgUm9sZXMtRnVsbCBQZXJtaXNzaW9uLE1hbmFnZSBVc2Vycy1GdWxsIFBlcm1pc3Npb24sTWFuYWdlIEF1ZGl0IFJlcG9ydHMtRnVsbCBQZXJtaXNzaW9uIiwiZXhwIjoxNjkxNDk5MDQ4fQ.pBrccUSy_L2IivX_aMdPvgJ-tNZ19Pfy22cHpRmfaoBY2CBcqldIvlQCEWfyolayxJKrB3uWsx1CVVUPoptX4w')
  }

  return this.http.post('http://localhost:7174/odinapi/RTM_DF_Fshd_Fragilex_RA_Sma_Mlpa_Pgd/AddRTM_DF_Fshd_Fragilex_RA_Sma_Mlpa_Pgd', addDf_pgdbody, header);
}

}
