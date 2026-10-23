/* 课程练习只在当前浏览器整理输入，不向服务端发送。 */
(function () {
  'use strict';
  function download(name, value) {
    var url = URL.createObjectURL(new Blob([JSON.stringify(value, null, 2)], { type: 'application/json;charset=utf-8' }));
    var a = document.createElement('a'); a.href = url; a.download = name;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
  }
  document.querySelectorAll('[data-sc-quiz]').forEach(function (root) {
    var out = root.querySelector('[data-feedback]');
    root.querySelector('button').addEventListener('click', function () {
      var checked = root.querySelector('input:checked');
      if (!checked) { out.textContent = '请先选择一项，再核对解释。'; return; }
      var correct = checked.value === root.dataset.correct;
      out.dataset.state = correct ? 'correct' : 'retry';
      out.textContent = (correct ? '判断正确。' : '可以再想一想。') + root.dataset.explanation;
    });
  });
  document.querySelectorAll('[data-sc-workbook]').forEach(function (form) {
    var out = form.querySelector('[data-output]');
    var mode = form.dataset.scWorkbook;
    function values() {
      var result = {};
      form.querySelectorAll('[name]').forEach(function (field) { result[field.name] = field.value.trim(); });
      return result;
    }
    function render() {
      var data = values();
      if (mode === 'title') {
        form.querySelector('[data-preview-title]').textContent = data.title || '你的页面标题';
        form.querySelector('[data-preview-description]').textContent = data.description || '用清楚的简介说明这页回答什么、适合谁。';
      }
      return data;
    }
    form.addEventListener('input', render);
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      var data = render();
      if (mode === 'performance') {
        var names = { lcp: 'LCP', inp: 'INP', cls: 'CLS' };
        var good = { lcp: 2.5, inp: 200, cls: 0.1 };
        out.textContent = Object.keys(names).map(function (key) {
          if (data[key] === '') return names[key] + '：尚未填写，不能判断。';
          var n = Number(data[key]);
          if (!Number.isFinite(n) || n < 0) return names[key] + '：请填写有效的非负数字。';
          return names[key] + '：' + (n <= good[key] ? '落在“良好”阈值内' : '超过“良好”阈值，需要继续排查') + '。';
        }).join('\n') + '\n\n这是输入值的阈值练习。真实评估需检查数据来源、样本和第 75 百分位，不代表整站达标或排名。';
      } else if (mode === 'economics') {
        var fields = ['revenue', 'cash_cost', 'hours', 'hourly'];
        if (fields.some(function (k) { return data[k] === '' || !Number.isFinite(Number(data[k])) || Number(data[k]) < 0; })) {
          out.textContent = '请完整填写四个有效的非负数字，使用同一期间与币种。'; return;
        }
        var contribution = Number(data.revenue) - Number(data.cash_cost);
        var adjusted = contribution - Number(data.hours) * Number(data.hourly);
        out.textContent = '确认收入减直接成本：' + contribution.toFixed(2) + '\n再减未重复计算的时间机会成本：' + adjusted.toFixed(2) + '\n\n仅是输入情景下的简化差额。未完整核算税费、折旧、跨期投入或现金流，不是利润承诺。';
      } else {
        var fields = form.querySelectorAll('[name]');
        out.textContent = Array.from(fields).map(function (field) {
          return field.closest('label').querySelector('span').textContent + '：\n' + (data[field.name] || '未填写');
        }).join('\n\n');
        if (mode === 'evaluation') out.textContent += '\n\n本记录仅代表这一次观察；尚未计算提及率，也不代表全网表现。';
      }
    });
    form.querySelector('[data-export]').addEventListener('click', function () {
      var data = values();
      if (!Object.values(data).some(Boolean)) { out.textContent = '请先填写实际内容，再导出记录。'; return; }
      download('seo-geo-' + form.id + '.json', { lesson: document.title, saved_at: new Date().toISOString(), mode: mode, values: data });
      out.textContent = '已生成本地 JSON 记录。分享前请检查是否包含不适合公开的信息。';
    });
    render();
  });
  document.querySelectorAll('[data-sc-checklist]').forEach(function (root) {
    var checks = Array.from(root.querySelectorAll('input[type=checkbox]'));
    var out = root.querySelector('[data-progress]');
    var key = 'seo_geo_acceptance_v1_' + location.pathname.split('/').pop();
    var storageAvailable = true;
    try {
      var saved = JSON.parse(localStorage.getItem(key) || '[]');
      if (Array.isArray(saved)) checks.forEach(function (c) { c.checked = saved.indexOf(c.name) >= 0; });
    } catch (e) { storageAvailable = false; }
    function update(save) {
      var selected = checks.filter(function (c) { return c.checked; }).map(function (c) { return c.name; });
      if (save) { try { localStorage.setItem(key, JSON.stringify(selected)); } catch (e) { storageAvailable = false; } }
      out.textContent = '已检查 ' + selected.length + ' / ' + checks.length + ' 项。' + (storageAvailable ? '勾选进度保存在当前浏览器。' : '当前无法保存进度，刷新后可能丢失，请导出。') + ' 完成勾选不保证搜索、引用或业务效果。';
    }
    checks.forEach(function (c) { c.addEventListener('change', function () { update(true); }); });
    root.querySelector('[data-reset]').addEventListener('click', function () { checks.forEach(function (c) { c.checked = false; }); update(true); });
    root.querySelector('[data-export]').addEventListener('click', function () {
      download('seo-geo-acceptance.json', { saved_at: new Date().toISOString(), items: checks.map(function (c) { return { item: c.closest('label').textContent.trim(), checked: c.checked }; }), note: '需要另附范围、证据、不适用理由与未完成项；勾选不代表效果保证。' });
    });
    update(false);
  });
})();
