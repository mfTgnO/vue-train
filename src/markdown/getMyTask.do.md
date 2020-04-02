##接口名称：/doctor_train/rest/app/getMyTask.do
######增加一个返回字段：exercisesid
######备注：当butype等于"技能考试评分"时，exercisesid才有意义（譬如:3190）；反之，为''
##接口名称：/doctor_train/rest/app/getJNExamInfo.do
######备注： 增加一个请求参数exercisesid，从getMyTask.do接口中获取
######请求参数：taskid、bepersonid、exercisesid(试卷id)
##接口名称：doctor_train/rest/app/getMySuperviseExamTask.do
######增加一个返回字段：exercisesid
######备注：当butype等于"技能考试评分"时，exercisesid才有意义（譬如:3190）；反之，为''