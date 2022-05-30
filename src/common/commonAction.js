import moment from 'moment';
export const get_time_diff=async(visitStartTime)=>
{
  let d1 =new Date(visitStartTime)
  let d2 = new Date();
  return Math.round((d2-d1)/1000)
}

export function getDateFormat(date,format){
  return moment(date).format(format)
}

export function format_date(date, incl_time = false, year_digits = 4, str_date_format = "YYYY-MM-DD h:mm a"){
  if(date){
      var out_format = "DD MMM YYYY"
  
     if(year_digits == 2){
         out_format = "DD MMM YY";
     }
     if(incl_time){
         out_format = out_format + " h:mm a"
     }
  
     if(date instanceof moment){
         return date.format(out_format);
     }
     else if(date == null){
         return "";
     }
     else{
      return moment(date, str_date_format).format(out_format);
     }
    }else{
      return '';
    }
  }