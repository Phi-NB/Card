import { useLoading, Oval } from '@agney/react-loading';

function Loading() {
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <Oval width="50" />,
  });

  return (
    
    <section className="loading" {...containerProps}>
      {indicatorEl}
    </section>
  );
}
 
export default Loading;