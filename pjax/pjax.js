/**
 * 方式1 监听按钮父节点事件
 */
 $(document).pjax(selector, [container], options);
 /**
  * 方式2 直接监听按钮，可以不用指定容器，默认使用按钮的data-pjax属性值查找容器
  */
 $("a[data-pjax]").pjax();
 /**
  * 方式3 主动绑定点击事件监听
  */
 $(document).on('click', 'a', $.pjax.click);
 $(document).on('click', 'a', function(event) {
     //获取container
     var container = $(this).closest('[data-pjax-container]');
     //click回调
     $.pjax.click(event, container);
 });
 /**
  * 方式4 主动绑定表单提交事件监听
  */
 $(document).on('submit', 'form', function(event) {
     //获取container
     var container = $(this).closest('[data-pjax-container]');
     //submit回调
     $.pjax.submit(event, container);
 });
 /**
  * 方式5 加载内容到指定容器
  */
 $.pjax({url: this.href, container: '#main'});
 /**
  * 方式6 重新加载当前页面容器的内容
  */
 $.pjax.reload('#container');