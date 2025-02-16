import React from "react";
import { Box, Container, Typography, Card, CardContent, Avatar } from "@mui/material";
import Slider from "react-slick";

const testimonials = [
  {
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Jane Doe",
    designation: "Scholarship Recipient",
    review:
      "This site helped me find the perfect scholarship. Truly life-changing!",
  },
  {
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    name: "John Smith",
    designation: "Student",
    review:
      "A fantastic resource for all scholarship seekers. Highly recommended.",
  },
  {
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    name: "Emily Johnson",
    designation: "Graduate",
    review:
      "Thanks to this platform, I secured a scholarship that eased my college expenses.",
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 600,
  autoplay: true,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const TestimonialSection = () => {
  return (
    <Box sx={{ backgroundColor: "#f7f8fa", py: 8 }}>
      <Container>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold", mb: 4 }}
        >
          What Our Users Say
        </Typography>
        <Slider {...sliderSettings}>
          {testimonials.map((testimonial, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
                px: 2,
              }}
            >
              <Card
                sx={{
                  maxWidth: 600,
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  boxShadow: 3,
                  borderRadius: 2,
                  p: 2,
                }}
              >
                <Avatar
                  src={testimonial.image}
                  alt={testimonial.name}
                  sx={{ width: 80, height: 80, mr: 3 }}
                />
                <CardContent sx={{ flex: 1 }}>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {testimonial.name}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    gutterBottom
                  >
                    {testimonial.designation}
                  </Typography>
                  <Typography variant="body1" sx={{ fontStyle: "italic" }}>
                    "{testimonial.review}"
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

export default TestimonialSection;
