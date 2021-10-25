//No need for any special modularity, code shorter than 100 lines
$(function () {
  const toggleVisibility = (node) => {
    return $(node).hasClass('display-none')
      ? $(node).addClass('display-visible').removeClass('display-none')
      : $(node).addClass('display-none').removeClass('display-visible');
  };

  const rotate180 = (node) => {
    $(function () {
      $(node).toggleClass('flip');
    });
  };

  const getButtonIcon = (node) => {
    return $(node).children('.fas')[0]; // return first child icon
  };

  const toggleDetails = () => {
    const toggleButtons = $('.app-careers__toggler');
    toggleButtons.each((_index, button) => {
      $(button).on('click', () => {
        const detailsDiv = $(button.previousElementSibling);
        toggleVisibility(detailsDiv);
        rotate180(getButtonIcon(button));
      });
    });
  };

  toggleDetails();
});
